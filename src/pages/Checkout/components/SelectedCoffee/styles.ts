import styled from "styled-components";
import { FormContainerBase } from "../CompleteOrder/styles";

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  flex: 1;
  max-width: 40rem;
  
`;

export const OrderDetailsContainer = styled(FormContainerBase)`
  border-radius: 6px 36px 6px 36px;
  display: flex; 
  flex-direction: column;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 0.75rem;
  
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between; 

   }
`;

export const ButtonConfirmation = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["yellow-primary"]};
  color: ${({ theme }) => theme.colors["white-primary"]};
  border-radius: 6px ;

  padding: 0.75rem;
  margin-top: 0.75rem;
`;