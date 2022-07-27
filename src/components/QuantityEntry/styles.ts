import styled from "styled-components";

export const QuantityEntryContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius 6px;

  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }
`;

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors["purple-primary"]};
  transition: 0.4s;

  &:disabled {
    opacity: 0.1;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["purple-dark"]};
  }
`;