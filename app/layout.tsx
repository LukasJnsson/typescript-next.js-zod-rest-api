
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'typescript-next.js-rest-api',
  description: 'REST API with TypeScript, Next.js, Zod, MongoDB and Docker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};