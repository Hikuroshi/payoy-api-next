"use client";

import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative h-100 flex items-center px-10 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/img/cover.png" alt=" " fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-5xl text-white">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">About Us</h1>
          <p className="leading-relaxed text-font-light text-justify mt-3"> Payoy adalah aplikasi Point of Sale (POS) modern yang dirancang untuk membantu pelaku UMKM dalam mengelola operasional bisnis secara lebih efisien dan profesional. Kami menghadirkan solusi kasir digital yang tidak hanya mempermudah transaksi, tetapi juga meningkatkan pengalaman pelanggan. Payoy hadir sebagai partner digital yang mendukung pertumbuhan bisnis, mulai dari pencatatan transaksi, manajemen produk, hingga laporan penjualan yang terintegrasi dalam satu platform.</p>
        </div>
      </section>

      <section className="py-20 px-10 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="border-l border-slate-200 pl-8">
            <h3 className="text-xs font-medium tracking-widest uppercase mb-3">History</h3>
            <p className="text-slate-500 text-justify font-light leading-relaxed">Payoy lahir dari permasalahan antrean panjang dan sistem kasir manual yang kurang efisien di banyak UMKM, khususnya di bidang kuliner. Untuk menjawab kebutuhan tersebut, Payoy dikembangkan dengan menghadirkan fitur QR Table sebagai solusi digital yang mempermudah pemesanan dan meningkatkan kecepatan layanan.</p>
          </div>
          <div className="border-l border-slate-200 pl-8">
            <h3 className="text-xs font-medium tracking-widest uppercase mb-3">Mission</h3>
            <p className="text-slate-500 text-justify font-light leading-relaxed">Misi Payoy adalah membantu UMKM bertransformasi ke sistem digital yang lebih efisien melalui solusi POS yang mudah digunakan, mengurangi antrean dengan teknologi QR Table, serta mendukung pengambilan keputusan bisnis melalui data dan laporan yang akurat.</p>
          </div>
          <div className="border-l border-slate-200 pl-8">
            <h3 className="text-xs font-medium tracking-widest uppercase mb-3">Values</h3>
            <p className="text-slate-500 text-justify font-light leading-relaxed">Payoy menjunjung nilai inovasi dalam menghadirkan solusi, kemudahan dalam penggunaan, efisiensi dalam operasional, keandalan sistem, serta fokus pada kebutuhan pengguna untuk menciptakan pengalaman terbaik bagi pemilik usaha dan pelanggan.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
