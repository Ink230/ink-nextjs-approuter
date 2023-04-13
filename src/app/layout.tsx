import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import './global.css';

export const metadata = {
  title: 'InkJQ',
  description: 'Test site in progress',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
