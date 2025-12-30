export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center gap-2">
                    <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black/90 transition">
                        Download Report
                    </button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { title: "Total Revenue", value: "$45,231.89", sub: "+20.1% from last month" },
                    { title: "Active Accounts", value: "+2350", sub: "+180.1% from last month" },
                    { title: "Sales", value: "+12,234", sub: "+19% from last month" },
                    { title: "Active Now", value: "+573", sub: "+201 since last hour" }
                ].map((item, i) => (
                    <div key={i} className="p-6 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <h3 className="tracking-tight text-sm font-medium text-zinc-500">{item.title}</h3>
                        </div>
                        <div className="text-2xl font-bold">{item.value}</div>
                        <p className="text-xs text-zinc-500 mt-1">{item.sub}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 p-6 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm min-h-[400px]">
                    <h3 className="font-semibold text-lg mb-4">Overview</h3>
                    <div className="h-[300px] w-full bg-zinc-100/50 rounded-lg flex items-center justify-center text-zinc-400">
                        Chart Placeholder
                    </div>
                </div>
                <div className="col-span-3 p-6 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <h3 className="font-semibold text-lg mb-4">Recent Sales</h3>
                    <div className="space-y-8">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className="flex items-center">
                                <div className="h-9 w-9 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-xs text-zinc-500">
                                    OM
                                </div>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                                    <p className="text-xs text-muted-foreground">olivia.martin@email.com</p>
                                </div>
                                <div className="ml-auto font-medium text-sm">+$1,999.00</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
