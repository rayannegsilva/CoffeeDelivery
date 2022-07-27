import { rgba } from 'polished';
import styled from 'styled-components'

import introBackground from '../../../../assets/intro-background.png'
import { TitleType } from '../../../../components/Typography';

export const IntroContainer = styled.div`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => `url(${introBackground}) no-repeat center,
  linear-gradient(
    0deg,
    ${theme.colors['white-primary']} 0%,
    ${rgba(theme.colors.background, 0.2)} 0%,  
    ${theme.colors.background} 50%
  )`
};
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const Title = styled(TitleType)`
  margin-bottom: 1rem;
`;

export const AdvantageContainer = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
`;

