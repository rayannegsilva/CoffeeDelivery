import { ReactNode } from "react";
import { TextType } from "../../../../components/Typography";
import { SectionHeaderContainer } from "./styles";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionHeader({ title, subtitle, icon} : SectionHeaderProps) {


  return(
    <SectionHeaderContainer>
      {icon}
      <div>
        <TextType color='subtitle'>{title}</TextType>
        <TextType size='s'>{subtitle}</TextType>
      </div>
    </SectionHeaderContainer>
  ); 
}