import ChatInput from '@/components/ChatInput';
import AppLayout from '@/components/Layout/AppLayout';
import PersonaDisplay from '@/components/PersonaDisplay';

export default function Home() {
  return (
    <AppLayout>
      <div className='pt-10 md:pt-48'>
        <PersonaDisplay />
      </div>
      <div className='absolute bottom-0 w-full lg:max-w-[60rem]'>
        <ChatInput />
      </div>
    </AppLayout>
  );
}
