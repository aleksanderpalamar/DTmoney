import * as Dialog from "@radix-ui/react-dialog";
import LogoImg from "../../assets/logo-dtmoney.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={LogoImg} alt="" />
          <h1>Controle Financeiro</h1>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />       
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
