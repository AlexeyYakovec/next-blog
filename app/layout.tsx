import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/shared";
import { MainNav } from "@/components/ui";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
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
               "min-h-screen bg-background font-sans antialiased",
               notoSans.className
            )}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
               disableTransitionOnChange
            >
               <main className="flex-1">{children}</main>
               <Footer />
            </ThemeProvider>
         </body>
      </html>
   );
}
