import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme.colors["gray-800"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme.colors["gray-900"]};
      padding: 1rem 1.5rem;
      color: ${(props) => props.theme.colors["gray-300"]};

      &::placeholder {
        color: ${(props) => props.theme.colors["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme.colors["green-500"]};
      color: ${(props) => props.theme.colors.white};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      padding: 0.125rem;
      margin-top: 1.5rem;
      cursor: pointer;
      transition: background-color 0.4s;

      &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }

      &:not(:disabled):hover {
        background: ${(props) => props.theme.colors["green-700"]};
      }
    }
  }
`;

export const Close = styled(Dialog.Close)`
  display: flex;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: ${(props) => props.theme.colors["gray-500"]};
  cursor: pointer;
`;

export const TransactionsType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
  align-items: center;
  justify-content: center;
`;

interface TransactionTypeButtonProps {
  variant?: "income" | "outcome";
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;  
  gap: 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.colors["gray-700"]};
  color: ${(props) => props.theme.colors["gray-300"]};
  cursor: pointer;  

  svg {
    color: ${props => props.variant === "income" ? props.theme.colors["green-300"] : props.theme.colors["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    background: ${(props) => props.theme.colors["gray-600"]};
    transition: background-color 0.4s;
  }

  &[data-state="checked"] {
    background: ${props => props.variant === "income" ? props.theme.colors["green-500"] : props.theme.colors["red-500"]};
    color: ${(props) => props.theme.colors.white};

    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
