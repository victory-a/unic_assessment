import ChatInput from '@/components/ChatInput';
import ChatQuestion from '@/components/ChatQuestion';
import AppLayout from '@/components/Layout/AppLayout';
import ChatResponse from '@/components/Layout/ChatResponse';
import PersonaDisplay from '@/components/PersonaDisplay';

export default function Home() {
  return (
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
        <ChatInput />
      </div>
    </AppLayout>
  );
}
