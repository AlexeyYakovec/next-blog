import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { cn } from '@/lib/utils';

import { Footer, MainNav } from '@/components/ui';
import { siteConfig } from './config/site';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'Server Components',
        'Radix UI',
        'Shadcn UI',
        'Javascript',
        'Blog',
    ],
    authors: [{ name: 'Coding como', url: 'https://github.com/AlexeyYakovec' }],
    creator: 'coding como',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    icons: {
        icon: '/public/favicon.ico',
        shortcut: '/public/favicon-16x16.png',
        apple: '/public/apple-touch-icon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    notoSans.className,
                )}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange>
                    <main className="flex-1">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
