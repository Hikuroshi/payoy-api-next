"use client";

import Link from "next/link";
import { Menu, House, Info, BriefcaseBusiness, Mail, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";

const navItems = [
  { label: "Beranda", href: "/", icon: House },
  { label: "Layanan", href: "/service", icon: Info },
  { label: "Tentang Kami", href: "/about", icon: BriefcaseBusiness },
  { label: "Kontak", href: "/contact", icon: Mail },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          Payoy
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Button variant="ghost">
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild>
            <Link href="/booking">Pesan Sekarang</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Buka menu">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent aria-describedby={undefined}>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <nav className="grid flex-1 auto-rows-min gap-2 px-4">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Button variant="outline" asChild key={item.href} className="w-full justify-start">
                      <Link href={item.href} className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </Button>
                  );
                })}
              </nav>

              <SheetFooter>
                <Button asChild>
                  <Link href="/menu" className="flex items-center gap-2">
                    <UtensilsCrossed className="h-4 w-4" />
                    <span>Pesan Sekarang</span>
                  </Link>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
