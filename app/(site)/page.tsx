import Image from "next/image";
import { Coins, PackageCheck, PanelsTopLeft, QrCode, Quote } from "lucide-react";

const features = [
  {
    title: "QR Code Table Booking",
    description: "Kurangi antri waiter, tingkatkan kecepatan layanan, dan track occupancy meja real-time dengan QR unik di setiap meja.",
    icon: QrCode,
  },
  {
    title: "Pengaturan Keuangan",
    description: "Pantau cashflow dan laporan laba rugi harian. kemudahan mengelola pengeluaran outlet tanpa ribet menggunakan spreadsheet.",
    icon: Coins,
  },
  {
    title: "Kelola Produk",
    description: "Hindari kehabisan barang laris dengan fitur update stok, track kadaluarsa, dan reorder otomatis.",
    icon: PackageCheck,
  },
  {
    title: "Satu Kendali untuk Banyak Outlet",
    description: "Skalakan bisnis tanpa chaos dengan Dashboard pusat untuk monitor semua cabang, bisa pisah data penjualan/stok per lokasi.",
    icon: PanelsTopLeft,
  },
];

const testimonials = [
  {
    quote: "Saya owner umkm sangat terbantu dengan adanya aplikasi Payoy! ini, fitur QR meja sangat membantu saya dalam menyelesaikan masalah antrian.",
    name: "Nathaniel Galih",
    role: "Owner toko roti & cafe",
    avatar: "/img/user1.png",
  },
  {
    quote: "Ngga salah saya pilih Payoy! secara fitur banyak sekali yang diberikan, tampilan user friendly banget untuk pegawai baru langsung bisa pakai tanpa ribet",
    name: "Viora",
    role: "Owner Ayam Bakar",
    avatar: "/img/user2.png",
  },
  {
    quote: "Aplikasi Payoy! bagus mudah digunakan, simpel, dan menarik. Semoga kedepannya ada fitur dashboard yang menampilkan grafik laporan penjualan.",
    name: "Icha",
    role: "Owner Cafe",
    avatar: "/img/user3.png",
  },
];

function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <a href="#download" aria-label="Download Payoy di App Store" className="block rounded-md transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
        <Image src="/img/app-store-badge.svg" alt="Download di App Store" width={120} height={40} className="h-10 w-auto" unoptimized />
      </a>

      <a href="#download" aria-label="Download Payoy di Google Play" className="block rounded-md transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
        <Image src="/img/google-play-badge.svg" alt="Dapatkan di Google Play" width={135} height={40} className="h-10 w-auto" unoptimized />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-background">
      <section id="beranda" className="mx-auto flex min-h-190 max-w-6xl flex-col items-center px-4 pb-20 pt-36 text-center">
        <h1 className="max-w-5xl text-balance text-4xl font-extrabold leading-tight tracking-normal md:text-5xl">Solusi digital untuk bisnis kuliner yang ingin tumbuh lebih cepat</h1>
        <p className="mt-5 max-w-4xl text-base leading-7 text-muted-foreground md:text-lg">Payoy membantu restoran, kafe, dan UMKM mengelola pesanan, meja, produk, serta laporan keuangan dalam satu aplikasi yang simpel, modern, dan mudah digunakan.</p>
        <div className="mt-8">
          <StoreBadges />
        </div>
        <div className="mt-28 w-full">
          <div className="mx-auto w-full max-w-70 overflow-hidden rounded-lg border bg-card shadow-[0_18px_40px_rgb(0_0_0/0.14)]">
            <Image src="/img/payoy-example.png" alt="Tampilan contoh aplikasi Payoy" width={440} height={956} className="h-auto w-full" sizes="280px" />
          </div>
        </div>
      </section>

      <section id="layanan" className="mx-auto grid max-w-6xl gap-14 px-4 py-24 md:grid-cols-[0.75fr_1.75fr] md:gap-20">
        <div>
          <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-normal md:text-5xl">
            Mulai jualan
            <br />
            tanpa ribet.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-x-20 md:gap-y-16">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article key={feature.title} className="flex flex-col items-start gap-4">
                <div className="grid size-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-extrabold tracking-normal">{feature.title}</h3>
                  <p className="text-base leading-7 text-muted-foreground">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="testimoni" className="mx-auto max-w-6xl px-4 py-24">
        <h2 className="text-center text-balance text-4xl font-extrabold leading-tight tracking-normal md:text-5xl">
          Apa Kata Pengguna <span className="text-primary">Payoy!</span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="flex min-h-65 flex-col justify-between rounded-lg border bg-card p-7 text-card-foreground shadow-sm">
              <div className="flex flex-col gap-5">
                <Quote className="size-10 fill-primary/20 text-primary/20" aria-hidden="true" />
                <p className="text-sm leading-7 text-muted-foreground">{testimonial.quote}</p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-muted">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="48px" className="object-cover" />
                </div>
                <div>
                  <h3 className="font-extrabold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="download" className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
        <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-normal md:text-5xl">Siap untuk mengelola bisnis kuliner?</h2>
        <p className="mt-5 text-base text-muted-foreground md:text-lg">Payoy tersedia di semua platform, website, android, dan ios.</p>
        <div className="mt-8">
          <StoreBadges />
        </div>
      </section>
    </main>
  );
}
