import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Events",
  description: "Your friendly events app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error('Error setting theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} dark:bg-gray-900 dark:text-white overflow-y-scroll
          bg-gray-200 text-black transition-colors duration-300`}
      >
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
