import React from 'react';
import { Metadata, Viewport } from 'next';
import { toast } from 'react-toastify';

import useDisclosure from '@/hooks/useDisclosure';
import useFetchChat from '@/hooks/useFetchChat';

import ChatInput from '@/components/ChatInput';
import ChatQuestion from '@/components/ChatQuestion';
import AppLayout from '@/components/Layout/AppLayout';
import ChatResponse from '@/components/ChatResponse';
import PersonaDisplay from '@/components/PersonaDisplay';
import CommandsModal from '@/components/CommandsModal';
import ScrapingModal from '@/components/ScrapingModal';

import useScrapeUrl from '@/hooks/useScrapeUrl';

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
  const { isLoading, value, messages, setValue, handleSend, handleEdit, handleStop } = useFetchChat();

  const {
    isOpen: isCommandsModalOpen,
    onClose: onCloseCommandsModal,
    onToggle: onToggleCommandsModal,
  } = useDisclosure();

  const { isOpen: isScrapingModalOpen, onClose: onCloseScrapingModal } = useDisclosure();

  const cancelOne = (id: string) => {
    console.log({ 'cancel scrape': id });
    onCloseScrapingModal;
  };

  const cancelAll = () => {
    onCloseScrapingModal();
  };

  // Scroll the last message into view when messages array changes
  const lastMessageRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages.length]);

  const { isScrapingNeeded, scrapeUrls, isScraping } = useScrapeUrl({ inputText: value });

  const handleSubmit = async () => {
    if (isScrapingNeeded) {
      try {
        const finalText = await scrapeUrls();

        handleSend(finalText);
      } catch (error) {
        toast('Error during scraping process', { type: 'error' });
        console.error('Error during scraping process:', error);
      }
    } else {
      handleSend(value);
    }
  };

  return (
    <>
      {isCommandsModalOpen ? <CommandsModal isOpen={isCommandsModalOpen} onClose={onCloseCommandsModal} /> : null}
      {isScrapingModalOpen ? (
        <ScrapingModal
          isOpen={isScrapingModalOpen}
          onClose={onCloseScrapingModal}
          handleCancelOne={cancelOne}
          handleCancelAll={cancelAll}
        />
      ) : null}

      <AppLayout>
        <div className='pb-48 pt-10 sm:pb-44 md:pt-48'>
          <PersonaDisplay />

          {messages.map((message, index) => {
            return (
              <div key={message.uuid} ref={index === messages.length - 1 ? lastMessageRef : null}>
                <ChatQuestion question={message.question} onEdit={() => handleEdit(message.uuid)} />
                <ChatResponse response={message.response} />
              </div>
            );
          })}
        </div>
        <div className='fixed bottom-0 w-full bg-background lg:max-w-[60rem]'>
          <ChatInput
            onToggleCommandsModal={onToggleCommandsModal}
            value={value}
            setValue={setValue}
            // handleSend={handleSend}
            handleSend={handleSubmit}
            handleStop={handleStop}
            isLoading={isLoading}
          />
        </div>
      </AppLayout>
    </>
  );
}
