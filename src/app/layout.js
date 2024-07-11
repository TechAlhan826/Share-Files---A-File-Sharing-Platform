import { Inter,Outfit } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "File Sharing",
  description: "Upload, Save and easily Share your files in one place",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
