const HF_API_URL = 'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1';


const HF_TOKEN = import.meta.env.VITE_HF_TOKEN;

export async function getRecipeFromHuggingFace(prompt) {
  const response = await fetch(HF_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    inputs: `Write a detailed recipe for ${prompt}. Include ingredients and instructions.`,
    parameters: {
        max_new_tokens: 400,
        temperature: 0.7,
        top_p: 0.9,
        return_full_text: false
    },
    options: {
        wait_for_model: true
    }
    })

  });

  const data = await response.json();

  if (!response.ok) {
    console.error('HF API error:', data);
    throw new Error(data.error || 'API Error');
  }

  if (Array.isArray(data) && data[0]?.generated_text) {
    return data[0].generated_text;
  }

  if (data.error) {
    throw new Error(data.error);
  }

  return 'Sorry, no recipe generated.';
}
