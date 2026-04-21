import { ChevronUp } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <section className="w-full max-w-sm flex flex-col items-center">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tight">Meja #02 tersedia!</h1>

        <div className="relative mt-11 w-full h-57 overflow-hidden rounded-xl shadow-sm">
          <Image src="/placeholder-meja.jpg" alt="Meja tersedia" fill priority className="object-cover" />
        </div>

        <a href="/menu">
          <p className="mt-11 text-lg leading-6 font-medium">
            Scroll ke atas
            <br />
            untuk membuka menu
          </p>

          <div className="mt-14 flex items-center justify-center animate-bounce">
            <ChevronUp size={32} />
          </div>
        </a>
      </section>
    </main>
  );
}
