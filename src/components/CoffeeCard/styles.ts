import styled from "styled-components"

export const CoffeeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 1.25rem 1.25rem 1.25rem;

  border-radius: 6px 36px 6px 36px;

  background: ${({ theme }) => theme.colors["base-card"]};

  img {
  margin-top: -1.25rem;
  }
`;

export const CoffeeTag = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;

    span {
      color: ${({ theme }) => theme.colors["yellow-dark"]};
      background-color: ${({ theme }) => theme.colors["yellow-light"]};
      font-size: ${({ theme }) => theme.textSizes.tag};
      font-weight: 700;
      line-height: 130%;
      padding: 4px 8px;
      border-radius: 100px;
      text-transform: uppercase;
    }
`;

export const AboutText = styled.span`
  color: ${({ theme }) => theme.colors["base-label"]};
  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  text-align: center;

  margin-top: 0.5rem;
`;

export const CoffeeCardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.063rem;
`;

export const PriceAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

 p{
  margin-top: 0.1rem;
 }
`;

export const AddCartWrapper = styled.div`
  width: 7.5rem;
  display: flex;
 

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors["purple-dark"]};
    color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: .4s color;

    &:hover {
     background: ${({ theme}) => theme.colors["purple-primary"]} ;
    }
  }
`;