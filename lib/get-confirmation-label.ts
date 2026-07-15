import type { Transaction } from "@/types/dashboard";

/**
 * Returns a human-readable confirmation label for a transaction.
 */
export function getConfirmationLabel(transaction: Transaction): string {
  if (transaction.status === "failed") {
    return "Failed";
  }

  if (transaction.confirmations >= 12) {
    return "Confirmed";
  }

  if (transaction.confirmations > 0) {
    return `${transaction.confirmations} confirmations`;
  }

  return "Pending";
}
