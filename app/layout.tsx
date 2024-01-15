import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADVEdges: 497K+",
  description: "@advwastaken",
  icons: {
    icon: '/logo.jpg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div vaul-drawer-wrapper="" className="bg-white min-h-[100vh]">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
