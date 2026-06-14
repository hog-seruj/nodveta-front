"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: "◉" },
  { href: "/dashboard#transactions", label: "Transactions", icon: "⇄" },
  { href: "/dashboard#nodes", label: "Nodes", icon: "⬡" },
  { href: "/dashboard#analytics", label: "Analytics", icon: "▤" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-slate-50 md:flex md:flex-col">
      <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Main">
        <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Navigation
        </p>
        {navItems.map((item) => {
          const isActive = pathname === item.href.split("#")[0];

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-nodveta-600 text-white"
                  : "text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
