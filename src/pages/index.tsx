import Image from 'next/image';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]`}>
      <main>
        <p>Hello world TS</p>
      </main>
    </div>
  );
}
