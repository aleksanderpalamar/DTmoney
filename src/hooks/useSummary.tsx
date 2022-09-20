import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionsContext";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (preview, transaction) => {
      if (transaction.type === "income") {
        preview.income += +transaction.price;
        preview.total += +transaction.price;
      } else {
        preview.outcome += +transaction.price;
        preview.total -= -transaction.price;
      }

      return preview;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return summary;
}