import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tasty Tales',
  description: 'Every Recipe Has a Story',
};

const RootLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      />
    </head>
    <body>
    { children }
    </body>
    </html>
  );
};
export default RootLayout;

