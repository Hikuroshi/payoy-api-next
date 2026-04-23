import { Footer } from "../footer";
import { Header } from "../header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
