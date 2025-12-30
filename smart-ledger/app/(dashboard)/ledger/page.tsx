"use client";

import * as React from "react";
import { DataTable } from "@/components/ledger/data-table";
import { columns, Transaction } from "@/components/ledger/columns";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { TransactionForm } from "@/components/ledger/transaction-form";

// Initial Mock data
const initialData: Transaction[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "COMPLETED",
        description: "Freelance Payment",
        category: "Income",
        type: "INCOME",
        date: "2024-01-15T10:00:00.000Z",
    },
    {
        id: "489e1d42",
        amount: 1250.00,
        status: "COMPLETED",
        description: "Office Rent",
        category: "Rent",
        type: "EXPENSE",
        date: "2024-01-01T09:00:00.000Z",
    },
    {
        id: "998e1d42",
        amount: 50.00,
        status: "PENDING",
        description: "Software Subscription",
        category: "Tools",
        type: "EXPENSE",
        date: "2024-01-20T14:30:00.000Z",
    }
];

export default function LedgerPage() {
    const [data, setData] = React.useState<Transaction[]>(initialData);
    const [open, setOpen] = React.useState(false);

    const handleCreate = (values: any) => {
        const newTransaction: Transaction = {
            id: Math.random().toString(36).substr(2, 9),
            description: values.description,
            amount: Number(values.amount),
            category: values.category,
            type: values.type,
            status: "COMPLETED",
            date: new Date().toISOString(),
        };

        setData([newTransaction, ...data]);
        setOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Smart Ledger</h2>
                    <p className="text-zinc-500">Manage your transactions with an Excel-like interface.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button>New Transaction</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add Transaction</DialogTitle>
                                <DialogDescription>
                                    Enter the details of the new transaction here.
                                </DialogDescription>
                            </DialogHeader>
                            <TransactionForm onSubmit={handleCreate} onCancel={() => setOpen(false)} />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="rounded-md border p-0 flex flex-col bg-white dark:bg-zinc-950 overflow-hidden">
                <div className="p-4 border-b">
                    <h3 className="font-semibold">Transactions</h3>
                </div>
                <div className="p-4">
                    <DataTable columns={columns} data={data} />
                </div>
                <div className="p-2 border-t bg-zinc-50 dark:bg-zinc-900 text-xs text-center text-zinc-500">
                    Showing {data.length} transactions
                </div>
            </div>
        </div>
    );
}
