import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../context/TransactionsContext";
import { useMemo } from "react";

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [ transactions ]);

  return summary;
}
