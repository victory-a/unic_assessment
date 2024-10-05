import { NextApiRequest, NextApiResponse } from 'next';
import scrapeWebsite from '@/utils/scraper';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const scrapedContent = await scrapeWebsite(url);
  if (!scrapedContent) {
    return res.status(500).json({ error: 'Failed to scrape website' });
  }

  return res.status(200).json({ content: scrapedContent });
}
