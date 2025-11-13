"use client";

import Link from "next/link";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm install lucide-react

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Dashboard", icon: "🏠" },
    { href: "/login", label: "Login", icon: "🔐" },
    { href: "/profile", label: "Profile", icon: "👤" },
  ];

  return (
    <aside
      className={`
        fixed left-0 top-1/2 -translate-y-1/2
        h-3/4 ${open ? "w-64" : "w-16"}
        bg-grey-1000 text-white rounded-r-lg shadow-lg
        flex flex-col justify-between
        transition-all duration-300 ease-in-out overflow-hidden
      `}
    >
      <div>
        <div className="flex items-center justify-between p-4">
          <h2 className={`${open ? "block" : "hidden"} font-bold text-lg transition-all duration-200`}>
            Shinozawa
          </h2>
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-200 hover:text-white"
          >
            {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <nav className="flex flex-col gap-2 mt-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200
                  ${geistSans.variable} ${geistMono.variable} antialiased
                  ${isActive ? "bg-blue-900" : "hover:bg-blue-600"}
                `}
              >
                <span>{link.icon}</span>
                {open && <span>{link.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
