"use client";

import { Bell, Search, Menu } from "lucide-react";

export function Header() {
    return (
        <div className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 flex items-center justify-between">
            <div className="md:hidden">
                <Menu className="w-6 h-6 text-zinc-500" />
            </div>
            <div className="flex w-full justify-end items-center gap-x-4">
                <div className="hidden md:flex items-center gap-x-2 bg-zinc-100 dark:bg-zinc-900 px-3 py-2 rounded-md w-[300px]">
                    <Search className="w-4 h-4 text-zinc-500" />
                    <input
                        placeholder="Search transactions..."
                        className="bg-transparent border-none outline-none text-sm w-full"
                    />
                </div>
                <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition relative">
                    <Bell className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
            </div>
        </div>
    );
}
