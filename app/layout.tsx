import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import { outfit, plusJakartaSans } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 font-plus-jakarta-sans">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow animate-fade-in pt-2">
              {children}
            </main>
            <footer className="py-6 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
              <div className="container mx-auto px-4">
                <div className="flex justify-center items-center">
                  <div className="flex items-center">
                    <div className="mr-2 relative w-8 h-8 bg-primary-500 rounded-lg overflow-hidden flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                        <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                        <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
                      AutoFinder
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-center text-neutral-500 dark:text-neutral-500 text-sm">
                  <p>© {new Date().getFullYear()} AutoFinder. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}