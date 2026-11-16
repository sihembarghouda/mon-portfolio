
// @ts-expect-error Next.js processes global CSS imports at build time.
import "./globals.css";

export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio personnel développé avec Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
