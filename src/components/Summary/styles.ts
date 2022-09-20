import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  margin-top: -5rem;  
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme.colors["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.colors["gray-300"]};
  }

  strong {
    font-size: ${(props) => props.theme.fontSizes["3xl"]};
    display: block;
    margin-top: 1rem;
  }

  ${props => props.variant === "green" && css`
    background: ${props.theme.colors["green-700"]};
  `}
`;