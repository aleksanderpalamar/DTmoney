import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { memo } from "react";
import { TransactionsContext } from "../../../../context/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = zod.object({
  search: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

function SearchFormComponent() {
  const loadTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.loadTransactions;
  });

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

export const SearchForm = memo(SearchFormComponent);