import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors["gray-800"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > img {
      width: 50px;
      height: 50px;
    }

    > h1 {
      font-size: ${(props) => props.theme.fontSizes["3xl"]};
      font-weight: ${(props) => props.theme.fontWeights.extrabold};
    }
  }  
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  border-radius: 4px;
  background: ${(props) => props.theme.colors["green-500"]};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  cursor: pointer;
  padding: 0 1.25rem;
  transition: background-color 0.4s;  

  &:hover {
    background: ${(props) => props.theme.colors["green-700"]};    
  }
`;
