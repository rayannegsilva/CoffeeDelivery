import styled from "styled-components";


//TODO: Ajeitar a altura do QuantityEntry!

export const ItemCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 3.125rem;
  width: 100%;
  
  padding-bottom: 2.094rem;
  margin-bottom: 2.094rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};


  > p{
    font-weight: 700;
    align-self: flex-start;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img { 
    height: 4rem;
    width: 4rem;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  max-width: 10.688rem;
  gap: 0.5rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  gap: 0.5rem;
`;


export const ButtonRemove = styled.button`
  background-color: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  gap: 0.125rem;
  align-items: center;
  justify-content: center;
  border-radius: 6px; 
  text-transform: uppercase;
  padding: 0.3rem 0.5rem;

  svg {
    color: ${({ theme }) =>  theme.colors["purple-primary"]}
  }

  transition: .2s ;

  :hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }
`;