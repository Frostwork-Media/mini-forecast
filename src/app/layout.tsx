import "~/styles/globals.css";

import { Klee_One } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

import "@xyflow/react/dist/style.css";

const kleeOne = Klee_One({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
});

export const metadata = {
  title: "mini forecast",
  description: "A tiny forecasting tool",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${kleeOne.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
