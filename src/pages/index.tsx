import React from 'react';
import { Metadata, Viewport } from 'next';
import { toast } from 'react-toastify';

import useFetchChat from '@/hooks/useFetchChat';
import useScrapeUrl from '@/hooks/useScrapeUrl';
import { useActionModalsContext } from '@/context/ActionModalsContext';

import ChatInput from '@/components/ChatInput';
import AppLayout from '@/components/Layout/AppLayout';
import PersonaDisplay from '@/components/PersonaDisplay';
import CommandsModal from '@/components/CommandsModal';
import ScrapingModal from '@/components/ScrapingModal';

import MessagesView from '@/components/MessagesView';

export const metadata: Metadata = {
  title: `UNIC Assessment`,
  description: `UNIC LLM Assessment Victory Asokomeh`,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function Home() {
  const { value, setValue, currentModal, closeModal, setCurrentModal } = useActionModalsContext();

  const { isLoading, messages, handleSend, handleEdit, handleStop } = useFetchChat({ setValue });
  const { isScrapingNeeded, scrapeUrls, isScraping } = useScrapeUrl({ inputText: value });

  const handleSubmit = async () => {
    if (isScrapingNeeded) {
      setCurrentModal('SEARCH_AND_SCRAPE');
      try {
        const finalText = await scrapeUrls();

        handleSend(finalText);
      } catch (error) {
        toast('Error during scraping process', { type: 'error' });
        console.error('Error during scraping process:', error);
      } finally {
        closeModal();
      }
    } else {
      handleSend(value);
    }
  };

  const isCommandsModalOpen = currentModal === 'INSERT_COMMAND';
  const isScrapingModalOpen = currentModal === 'SEARCH_AND_SCRAPE';

  return (
    <>
      {isCommandsModalOpen ? <CommandsModal isOpen={isCommandsModalOpen} onClose={closeModal} /> : null}
      {isScrapingModalOpen ? (
        <ScrapingModal isOpen={isScrapingModalOpen} onClose={closeModal} isScraping={isScraping} />
      ) : null}

      <AppLayout>
        <div className='pb-60 pt-10 sm:pb-44 md:pt-48'>
          <PersonaDisplay />
          <MessagesView messages={messages} handleEdit={handleEdit} />
        </div>
        <div className='sticky bottom-0 w-full bg-background lg:max-w-[60rem]'>
          <ChatInput
            openCommandsModal={() => setCurrentModal('INSERT_COMMAND')}
            handleSend={handleSubmit}
            handleStop={handleStop}
            isLoading={isLoading}
          />
        </div>
      </AppLayout>
    </>
  );
}
