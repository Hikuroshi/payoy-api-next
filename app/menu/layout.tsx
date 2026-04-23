export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-svh bg-background">{children}</div>;
}
