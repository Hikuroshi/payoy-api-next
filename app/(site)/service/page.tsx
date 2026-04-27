import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Service() {
  return (
    <div className="flex flex-col gap-6 p-10">
      <h1 className="text-4xl font-extrabold text-center">Layanan Kami</h1>
      <h3 className="text-lg text-center">Solusi lengkap untuk membantu operasional bisnis kuliner berjalan lebih cepat, rapi, dan tanpa ribet.</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* CARD 1 */}
        <Card className="min-h-[320px] flex flex-col text-center transition hover:bg-orange-50">
          <CardHeader className="items-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="w-12 h-12">
                <rect width="5" height="5" x="3" y="3" rx="1" />
                <rect width="5" height="5" x="16" y="3" rx="1" />
                <rect width="5" height="5" x="3" y="16" rx="1" />
                <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                <path d="M21 21v.01" />
                <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                <path d="M3 12h.01" />
                <path d="M12 3h.01" />
                <path d="M12 16v.01" />
                <path d="M16 12h1" />
                <path d="M21 12v.01" />
                <path d="M12 21v-1" />
              </svg>
            </div>

            <CardTitle className="text-lg font-semibold">QR Code Table Booking</CardTitle>

            <CardDescription className="text-sm text-gray-500">Pesanan lebih cepat, tanpa antre.</CardDescription>

            <div className="mt-4 p-4 border rounded-lg text-sm text-gray-600 bg-stone-50 text-left space-y-1">
              <p>• Custom design sesuai kebutuhan</p>
              <p>• Revisi fleksibel</p>
              <p>• High resolution output</p>
            </div>
          </CardHeader>

          <CardFooter className="mt-auto justify-center">
            <p className="text-sm">Pelajari lebih lanjut ➝</p>
          </CardFooter>
        </Card>

        {/* CARD 2 */}

        <Card className="min-h-[320px] flex flex-col text-center transition hover:bg-orange-50">
          <CardHeader className="items-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="w-12 h-12">
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
              </svg>
            </div>

            <CardTitle className="text-lg font-semibold">Pengaturan Keuangan</CardTitle>

            <CardDescription className="text-sm text-gray-500">Semua laporan dalam satu dashboard.</CardDescription>

            <div className="mt-4 p-4 border rounded-lg text-sm text-gray-600 bg-stone-50 text-left space-y-1">
              <p>• Laporan keuangan otomatis</p>
              <p>• Tracking pemasukan & pengeluaran</p>
              <p>• Insight bisnis untuk keputusan lebih tepat</p>
            </div>
          </CardHeader>

          <CardFooter className="mt-auto justify-center">
            <p className="text-sm">Pelajari lebih lanjut ➝</p>
          </CardFooter>
        </Card>

        {/* CARD 3 */}

        <Card className="min-h-[320px] flex flex-col text-center transition hover:bg-orange-50">
          <CardHeader className="items-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="w-12 h-12">
                <path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" />
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" />
                <path d="M6 13h12" />
                <path d="M6 17h12" />
              </svg>
            </div>

            <CardTitle className="text-lg font-semibold">Kelola Produk</CardTitle>

            <CardDescription className="text-sm text-gray-500">Stok aman, operasional tetap lancar.</CardDescription>

            <div className="mt-4 p-4 border rounded-lg text-sm text-gray-600 bg-stone-50 text-left space-y-1">
              <p>• Update stok secara real-time</p>
              <p>• Notifikasi stok menipis</p>
              <p>• Manajemen menu lebih fleksibel</p>
            </div>
          </CardHeader>

          <CardFooter className="mt-auto justify-center">
            <p className="text-sm">Pelajari lebih lanjut ➝</p>
          </CardFooter>
        </Card>

        {/* CARD 4 */}

        <Card className="min-h-[320px] flex flex-col text-center transition hover:bg-orange-50">
          <CardHeader className="items-center">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="w-12 h-12">
                <circle cx="12" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <circle cx="18" cy="6" r="3" />
                <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
                <path d="M12 12v3" />
              </svg>
            </div>

            <CardTitle className="text-lg font-semibold">Kendali Multi Outlet</CardTitle>

            <CardDescription className="text-sm text-gray-500">Kelola cabang dari satu tempat.</CardDescription>

            <div className="mt-4 p-4 border rounded-lg text-sm text-gray-600 bg-stone-50 text-left space-y-1">
              <p>• Monitoring multi-outlet</p>
              <p>• Laporan per cabang</p>
              <p>• Skalakan bisnis tanpa chaos operasional</p>
            </div>
          </CardHeader>

          <CardFooter className="mt-auto justify-center">
            <p className="text-sm">Pelajari lebih lanjut ➝</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
