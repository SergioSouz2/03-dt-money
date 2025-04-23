import { HeaderContainer, HeaderContent, Logo, LogoContainer, NewTransactionButton } from "./styles";
import logoImg from '../../assets/ignite-logo.svg'
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal/NewTransactionModal";




export function Header() {
	return (
		<HeaderContainer>
			<HeaderContent>
				<LogoContainer>
					<Logo src={logoImg} alt="" />
					<h1> DT Money</h1>
				</LogoContainer>

				<Dialog.Root>
					<Dialog.Trigger asChild>
						<NewTransactionButton>Nova Transação</NewTransactionButton>
					</Dialog.Trigger>
					<NewTransactionModal/>
					
				</Dialog.Root>

			</HeaderContent>
		</HeaderContainer>
	)
}