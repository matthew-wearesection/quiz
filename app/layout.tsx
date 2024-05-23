import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My best "T"',
  description: 'choose my best T',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          overflow: 'hidden',
          width: '100vw',
          height: '100vh',
          backgroundColor: '#fff7f7',
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
