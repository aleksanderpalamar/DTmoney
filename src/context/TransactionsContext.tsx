import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;  
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
  loadTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: createTransactionData) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface createTransactionData {
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",        
        q: query,
      }
    })

    setTransactions(response.data);
  }

  async function createTransaction(data: createTransactionData) {
    const { description, price, category, type } = data;

    const response = await api.post("/transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions(state => [response.data, ...state]);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider 
      value={{ 
        transactions,
        loadTransactions,
        createTransaction,
       }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}