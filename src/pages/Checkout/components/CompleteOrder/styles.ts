import styled from "styled-components";

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FormContainerBase = styled.div`
  with: 100%;
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const CompleteOrderForm = styled(FormContainerBase )`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.5rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

export const PaymentContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;