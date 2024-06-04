import '@/app/ui/global.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({weight: ['200', '200'], subsets:['latin'], style: ['normal', 'italic']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
     
        <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
