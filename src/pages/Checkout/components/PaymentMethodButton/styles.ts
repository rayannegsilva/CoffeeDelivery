import styled from "styled-components";

export const PaymentMethodButtonContainer = styled.button`
 padding: 1rem 0 1rem 1rem;
 background-color: ${({ theme }) => theme.colors["base-button"]};
 border-radius: 6px;
 width: 11.167rem;

 text-transform: uppercase;

 display: flex;
 justify-content: flex-start;
 align-items: center;
 gap: 0.75rem;

 color: ${({ theme }) => theme.colors["base-text"]};
 font-size: ${({ theme }) => theme.textSizes["button-s"]};

 border: 1px solid ${({ theme }) => theme.colors["base-button"]};
 transition: 0.4s;

 svg {
  color: ${({ theme }) => theme.colors["purple-primary"]}
 }

 :hover {
  background-color: ${({ theme}) => theme.colors["base-hover"]};
 }

 use-select: none;
`;