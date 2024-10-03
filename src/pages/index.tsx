import React from 'react';
import ChatInput from '@/components/ChatInput';
import ChatQuestion from '@/components/ChatQuestion';
import AppLayout from '@/components/Layout/AppLayout';
import ChatResponse from '@/components/Layout/ChatResponse';
import PersonaDisplay from '@/components/PersonaDisplay';
import useDisclosure from '@/hooks/useDisclosure';
import CommandsModal from '@/components/CommandsModal';
import { Metadata, Viewport } from 'next';
import ScrapingModal from '@/components/ScrapingModal';

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
        <div className='pb-7 pt-10 md:pt-48'>
          <PersonaDisplay />
          {/* chat content goes here */}
          <div>
            <ChatQuestion />
            <ChatResponse />
          </div>

          {/* chat content goes here */}
        </div>
        <div className='sticky bottom-0 w-full bg-background lg:max-w-[60rem]'>
          <ChatInput onToggleCommandsModal={onToggleCommandsModal} />
        </div>
      </AppLayout>
    </>
  );
}
