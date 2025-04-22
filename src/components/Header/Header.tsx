import { HeaderContainer, HeaderContent, Logo, LogoContainer, NewTransactionButton } from "./styles";
import logoImg from '../../assets/ignite-logo.svg'




export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <Logo src={logoImg} alt="" />
          <h1> DT Money</h1>
        </LogoContainer>
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}