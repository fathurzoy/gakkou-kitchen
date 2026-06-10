import { Noto_Sans_JP, Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from './HeaderFooter';
import { GlobalStateProvider } from './GlobalStateProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Gakkou Kitchen | 学校キッチン',
  description:
    'Resep masakan internasional praktis dengan bahan dari supermarket Jepang (Gyomu Super & Aeon) khusus untuk mahasiswa Nihongo Gakkou dan pekerja asing. Dilengkapi panduan belanja dan furigana.',
  keywords: 'resep jepang, halal jepang, furigana resep, nihongo gakkou, gyomu super, warga asing jepang',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Gakkou Kitchen | 学校キッチン',
    description: 'Resep praktis dan panduan belanja bahan masakan untuk warga asing di Jepang',
    type: 'website',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gakkou Kitchen',
    description: 'Resep praktis dan panduan belanja bahan masakan untuk warga asing di Jepang',
    images: ['/logo.png'],
  },
};

import { LanguageProvider } from './LanguageContext';

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${notoSansJP.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <GlobalStateProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </GlobalStateProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
