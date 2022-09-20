import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    padding: 1rem;
    background: ${props => props.theme.colors["gray-800"]};
    color: ${props => props.theme.colors["gray-300"]};
    
    &::placeholder {
      color: ${props => props.theme.colors["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: transparent;
    color: ${props => props.theme.colors["green-300"]};
    border: 1px solid ${props => props.theme.colors["green-300"]};
    font-weight: ${props => props.theme.fontWeights.bold};
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.4s, color 0.4s;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }

    &:not(:disabled):hover {
      background: ${props => props.theme.colors["green-500"]};
      border-color: ${props => props.theme.colors["green-500"]};
      color: ${props => props.theme.colors.white};            
    }
  }
`;