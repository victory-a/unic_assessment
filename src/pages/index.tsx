import AppLayout from '@/components/Layout/AppLayout';
import PersonaDisplay from '@/components/PersonaDisplay';

export default function Home() {
  return (
    <AppLayout>
      <div className='pt-48'>
        <PersonaDisplay />
      </div>
    </AppLayout>
  );
}
