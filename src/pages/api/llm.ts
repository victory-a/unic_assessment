import { HfInference } from '@huggingface/inference';
import { NextApiRequest, NextApiResponse } from 'next';

const inference = new HfInference(process.env.HUGGING_FACE_API_KEY); // Replace with your actual token

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { messages } = req.body;

    try {
      const response = await inference.chatCompletion({
        model: 'microsoft/Phi-3-mini-4k-instruct',
        messages,
        max_tokens: 500,
      });

      const content = response.choices[0]?.message?.content;

      if (content) {
        return res.status(200).json({ content });
      } else {
        return res.status(500).json({ message: 'No content returned from LLM.' });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
      return res.status(500).json({ message: 'Error communicating with LLM', error: errorMessage });
    }
  } else if (req.method === 'DELETE') {
    res.status(200).json({ message: 'Cleanup complete' });
  } else {
    res.setHeader('Allow', ['POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
