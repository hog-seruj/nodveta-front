"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { getConfirmationLabel } from "@/lib/get-confirmation-label";
import type { Transaction, TransactionStatus } from "@/types/dashboard";

interface TransactionTableProps {
  transactions: Transaction[];
}

export const STATUS_FILTER_OPTIONS: Array<{
  value: "all" | TransactionStatus;
  label: string;
}> = [
  { value: "all", label: "All statuses" },
  { value: "confirmed", label: "Confirmed" },
  { value: "pending", label: "Pending" },
  { value: "failed", label: "Failed" },
];

function statusVariant(
  status: TransactionStatus,
): "success" | "warning" | "danger" {
  switch (status) {
    case "confirmed":
      return "success";
    case "pending":
      return "warning";
    case "failed":
      return "danger";
  }
}

function formatTimestamp(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  const [statusFilter, setStatusFilter] = useState<"all" | TransactionStatus>(
    "all",
  );

  const visibleTransactions = useMemo(() => {
    if (statusFilter === "all") {
      return transactions;
    }

    return transactions.filter(
      (transaction) => transaction.status === statusFilter,
    );
  }, [statusFilter, transactions]);

  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-4 pt-4">
        <p className="text-sm text-slate-500">
          Showing {visibleTransactions.length} transactions
        </p>
        <select
          aria-label="Filter transactions by status"
          className="rounded border border-slate-300 px-2 py-1 text-sm"
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value as "all" | TransactionStatus)
          }
        >
          {STATUS_FILTER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {visibleTransactions.length === 0 ? (
        <p className="px-4 pb-4 text-sm text-slate-500">
          {/* TODO: Replace with a proper empty state when the filter returns no rows */}
          No transactions to display.
        </p>
      ) : (
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Hash</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Confirmation</th>
              <th className="px-4 py-3 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {visibleTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-4 py-3 font-mono text-xs text-slate-700">
                  {transaction.hash}
                </td>
                <td className="px-4 py-3 capitalize text-slate-700">
                  {transaction.type}
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {transaction.amount}
                </td>
                <td className="px-4 py-3">
                  <Badge variant={statusVariant(transaction.status)}>
                    {transaction.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-slate-700">
                  {getConfirmationLabel(transaction)}
                </td>
                <td className="px-4 py-3 text-slate-500">
                  {formatTimestamp(transaction.timestamp)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
