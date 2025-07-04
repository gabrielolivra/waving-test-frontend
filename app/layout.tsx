import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="pt" suppressHydrationWarning>
      <title>Desafio waving test</title>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
