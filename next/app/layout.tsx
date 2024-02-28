import "@/app/globals.css"
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils.ts"
import { BaseHeader } from "@/app/_component/tmp/header/BaseHeader"

export const metadata: Metadata = {
  title: "全知全農",
  description: "全知全農は農業に関する質問や回答を集約したサイトです。",
};
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <BaseHeader />
        {children}
      </body>
    </html>
  );
}
