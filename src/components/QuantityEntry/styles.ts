import styled, { css } from "styled-components";

type QuantityEntryContainerProps = {
  size: 'small' | 'medium';
}


export const QuantityEntryContainer = styled.div<QuantityEntryContainerProps>`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius 6px;

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

  ${({ size }) => size === 'medium' && css`
    padding: 0.5rem;
  `}

  ${({ size }) => size === 'small' && css`
    padding: 0.3rem;
  `}
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