import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import ConsoleSuppressor from '@/components/ConsoleSuppressor';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Nathani - Web Developer Portfolio",
  description: "Professional portfolio showcasing web development skills, projects, and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground transition-colors duration-300`} suppressHydrationWarning>
        <ConsoleSuppressor />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={['light', 'dark', 'vibe']}
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
