import styled from "styled-components";
import { TitleType } from "../../components/Typography";

export const OrderConfirmationContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 5rem;
   gap: 2.5rem;
   


   > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
   }
`;

export const Title = styled(TitleType)`
  color: ${({ theme }) => theme.colors["yellow-dark"]};
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.background};

  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  min-width: 32rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);

  }
`;


