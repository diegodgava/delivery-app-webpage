import Header from './components/Header';
import './globals.css'
import { Nunito } from 'next/font/google'

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Mobile app showcase',
  description: 'Aplicativo para demonstração de app mobile',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        {children}
      </body>
    </html>
  );
}

