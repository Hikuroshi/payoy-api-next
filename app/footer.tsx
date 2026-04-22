"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-5">
        <div className="space-y-3 col-span-2">
          <Link href="/" className="text-lg font-extrabold tracking-tight">
            Payoy
          </Link>
          <p className="text-sm leading-6 text-muted-foreground">Tempat nyaman untuk menikmati makanan, minuman, dan suasana santai bersama teman maupun keluarga.</p>
        </div>

        <div className="space-y-3 col-span-1">
          <h3 className="text-sm font-semibold">Navigasi</h3>
          <nav className="grid gap-2">
            {footerNavItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3 col-span-2">
          <h3 className="text-sm font-semibold">Kontak</h3>

          <div className="grid gap-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Jl. Contoh No. 123, Jakarta</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <span>+62 812-3456-7890</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <span>hello@payoy.com</span>
            </div>

            {/* <div className="flex items-center gap-2">
              <Instagram className="h-4 w-4 shrink-0" />
              <span>@payoy.id</span>
            </div> */}
          </div>
        </div>
      </div>

      <div className="border-t text-sm text-muted-foreground text-center py-4">
        <p>© 2026 Payoy. All rights reserved.</p>
      </div>
    </footer>
  );
}
