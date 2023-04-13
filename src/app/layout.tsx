import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
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
