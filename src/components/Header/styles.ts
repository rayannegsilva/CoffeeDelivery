import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;


export const Buttons = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;
  min-width: 2.375rem;
  height: 2.375rem;
  position: relative;
  font-size: ${({theme}) => theme.textSizes['text-regular-s']};

  ${({ variant, theme}) => css`
    background: ${theme.colors[`${variant}-light`]};
    color: ${theme.colors[`${variant}-dark`]}
  `};

  ${({variant, theme}) => variant === 'purple' && css`
    svg {
      color: ${theme.colors['purple-primary']}
    }
  `};
`;

