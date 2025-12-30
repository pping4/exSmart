"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Table2,
  LineChart,
  Settings,
  CreditCard,
  LogOut,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Access requires creating basic button if not exists or using div
// Using standard div/HTML for now to reduce dependency on shadcn components not yet verified.
// Actually, I can use basic Tailwind.

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Smart Ledger",
    icon: Table2,
    href: "/ledger",
    color: "text-violet-500",
  },
  {
    label: "Reports",
    icon: LineChart,
    href: "/reports",
    color: "text-pink-700",
  },
  {
    label: "Transactions",
    icon: CreditCard,
    href: "/transactions",
    color: "text-orange-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
             {/* Logo Placeholder */}
             <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
                S
             </div>
          </div>
          <h1 className="text-2xl font-bold font-sans tracking-tight">
            Smart Ledger
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
         <div className="p-3 bg-white/5 rounded-lg mb-2">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
                    <User className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-medium text-white truncate">User</p>
                    <p className="text-xs text-zinc-500 truncate">user@example.com</p>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}
