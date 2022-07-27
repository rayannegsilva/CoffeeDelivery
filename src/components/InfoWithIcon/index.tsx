import { ReactNode } from "react";
import { IconInfoContainer, Icon } from "./styles";

const TYPE_OF_COLORS = {
  yellow: 'yellow-primary',
  yellow_dark: 'yellow-dark',
  purple: 'purple-primary',
  gray: 'base-text'
} as const


interface InfoIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  color: keyof typeof TYPE_OF_COLORS;
}

export function InfoWithIcon({ icon, color, text} : InfoIconProps) {
  return(
    <IconInfoContainer >
      <Icon color={color}>{icon}</Icon>
      { typeof text === 'string' ? <p>{text}</p>  : text}
    </IconInfoContainer>
  )
}