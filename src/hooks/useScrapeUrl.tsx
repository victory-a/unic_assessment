import { useState, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  checkIncludeUrlCommands,
  replaceCommandsWithPlaceholders,
  truncateContent,
  urlRegex,
} from '@/utils/scraperUtils';

interface IUseScrapeUrl {
  inputText: string;
  maxChar?: number;
}

const useScrapeUrl = ({ inputText, maxChar = 500 }: IUseScrapeUrl) => {
  const [isScraping, setIsScraping] = useState(false);
  const [scrapeError, setScrapeError] = useState<string>('');

  const urlSIncluded = checkIncludeUrlCommands(inputText); // Check if there are include-url commands
  const isScrapingNeeded = urlSIncluded.length > 0;

  const scrapeUrls = useCallback(async () => {
    setIsScraping(true);
    setScrapeError('');

    // Replace commands with placeholders and extract placeholders for scraping
    const { modifiedText, placeholders } = replaceCommandsWithPlaceholders(inputText, urlSIncluded);

    // Array to hold scraped content or errors
    const scrapedResults: string[] = await Promise.all(
      placeholders.map(async (placeholderObj) => {
        const match = placeholderObj.command.match(urlRegex); // Extract URL
        const url = match ? match[0] : null;

        if (!url) {
          return 'Error: Invalid URL';
        }

        try {
          const response = await axios.post('/api/scrape', { url });
          const content = response.data.content;
          return content ? truncateContent(content, maxChar) : 'SRY FAILED TO SCRAPE';
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'SRY FAILED TO SCRAPE';

          toast('Error scraping content', { type: 'error' });
          console.error('Error scraping content:', errorMessage);
          return 'SRY FAILED TO SCRAPE';
        }
      }),
    );

    // Replace placeholders with scraped content
    let finalText = modifiedText;
    placeholders.forEach((placeholderObj, index) => {
      finalText = finalText.replace(placeholderObj.placeholder, scrapedResults[index]);
    });

    setIsScraping(false);
    return finalText;
  }, [inputText, urlSIncluded]);

  return { isScrapingNeeded, scrapeUrls, isScraping, scrapeError };
};

export default useScrapeUrl;
