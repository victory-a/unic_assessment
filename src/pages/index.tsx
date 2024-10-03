import React from 'react';
import ChatInput from '@/components/ChatInput';
import ChatQuestion from '@/components/ChatQuestion';
import AppLayout from '@/components/Layout/AppLayout';
import ChatResponse from '@/components/Layout/ChatResponse';
import PersonaDisplay from '@/components/PersonaDisplay';
import useDisclosure from '@/hooks/useDisclosure';
import CommandsModal from '@/components/CommandsModal';

export default function Home() {
  const {
    isOpen: isCommandsModalOpen,
    onClose: onCloseCommandsModal,
    onToggle: onToggleCommandsModal,
  } = useDisclosure();

  return (
    <>
      {isCommandsModalOpen ? <CommandsModal isOpen={isCommandsModalOpen} onClose={onCloseCommandsModal} /> : null}

      <AppLayout>
        <div className='pb-[12.5rem] pt-10 sm:pb-[10rem] md:pt-48'>
          <PersonaDisplay />
          {/* chat content goes here */}
          <div>
            <ChatQuestion />
            <ChatResponse />
          </div>

          {/* chat content goes here */}
        </div>
        <div className='fixed bottom-0 w-full bg-background lg:max-w-[60rem]'>
          <ChatInput onToggleCommandsModal={onToggleCommandsModal} />
        </div>
      </AppLayout>
    </>
  );
}
