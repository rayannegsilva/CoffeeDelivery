import styled, { css } from 'styled-components'

interface TitleProps {
  color?: "text" | "title" | "subtitle";
  size?: "s" | "m" | "l" | "xl" | "xs";
  weight?: string | number;
}

interface TextProps {
  color?: "text" | "title" | "subtitle";
  size?: "s" | "m" | "l";
  type?: "regular" | "bold";
  weight?: string | number;
}

export const TitleType = styled.h1<TitleProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "text"}`]};
  font-size: ${({ theme, size}) =>  theme.textSizes[`title-${size ?? 'm'}`]};
  font-weight: ${({ weight }) => weight ?? 800};

  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 130%;
  `;

export const TextType = styled.p<TextProps>`
  color: ${({ theme, color}) => theme.colors[`base-${color ?? "text"}`]};
  font-size: ${({ theme, type, size }) => theme.textSizes[`text-${type ?? 'regular'}-${size ?? 'm'}`]};
  font-weight: ${({ weight }) => weight ?? 400};

  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 130%;
`;