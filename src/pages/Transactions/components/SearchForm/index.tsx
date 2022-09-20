import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../context/TransactionsContext";

const searchFormSchema = zod.object({
  search: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { loadTransactions } = useContext(TransactionsContext);

  const { 
    register, 
    handleSubmit,
    formState: {isSubmitting}
   } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await loadTransactions(data.search);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque uma transação" 
        {...register("search")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={32} />
        Buscar
      </button>    
    </SearchFormContainer>
  )
}
