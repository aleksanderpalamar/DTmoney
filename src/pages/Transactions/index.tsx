import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../context/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transation => {
              return (
                <tr key={transation.id}>
                  <td width="50%">{transation.description}</td>
                  <td>
                    <PriceHighlight variant={transation.type}>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(
                        transation.type === "outcome"
                          ? -transation.price
                          : transation.price
                      )}
                    </PriceHighlight>
                  </td>
                  <td>{transation.category}</td>
                  <td>
                    {new Intl.DateTimeFormat("pt-BR").format()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
