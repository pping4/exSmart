"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, auth, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Transaction = {
    id: string;
    amount: number;
    status: "PENDING" | "COMPLETED" | "CANCELLED";
    description: string;
    category: string;
    type: "INCOME" | "EXPENSE";
    date: string; // ISO string 
};

export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const date = new Date(row.getValue("date"));
            return <div>{date.toLocaleDateString()}</div>
        }
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ row }) => {
            const type = row.getValue("type") as string;
            return (
                <div className={`font-medium ${type === 'INCOME' ? 'text-green-600' : 'text-red-600'}`}>
                    {type}
                </div>
            )
        }
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <div className="text-right">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Amount
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "status",
        header: "Status",
    },
];
