import type { Metadata } from "next";
import "./globals.css";
import * as stylex from '@stylexjs/stylex';
import Heading from "@/components/Heading";


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
      <body>
        <div {...stylex.props(rootstyles.root)}>
          <h1 {...stylex.props(rootstyles.hi)}>hi</h1>
          <Heading>hi</Heading>
          <main {...stylex.props(rootstyles.main)}>{children}</main>
        </div>
      </body>
    </html>
  );
}


const rootstyles = stylex.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
  },
  hi: {
    fontSize: "3rem"
  }
})