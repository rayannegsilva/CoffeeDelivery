import styled from "styled-components";

const TYPE_OF_COLORS = {
  yellow: 'yellow-primary',
  yellow_dark: 'yellow-dark',
  purple: 'purple-primary',
  gray: 'base-text'
} as const

interface InfoIconStyled {
  color:  keyof typeof TYPE_OF_COLORS;
}

export const IconInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Icon = styled.div<InfoIconStyled>`
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors[TYPE_OF_COLORS[props.color]]};
  color: ${(props) => props.theme.colors["white-primary"]}
`;

