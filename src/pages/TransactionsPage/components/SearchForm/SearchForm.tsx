import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";


export function SearchForm(){
  return(
    <SearchFormContainer>
      <input type="text" placeholder="Buscar transações" />
      <button>
        <MagnifyingGlass size={20}/>
        pesquisar
      </button>

    </SearchFormContainer>
  )
}