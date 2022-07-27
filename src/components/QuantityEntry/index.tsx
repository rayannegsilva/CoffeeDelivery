import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityEntryContainer } from "./styles";

export function QuantityEntry() {
  return(
    <QuantityEntryContainer>
      <IconWrapper>
        <Minus size={14} weight='fill' />
      </IconWrapper>
        <input 
          type='number'
          readOnly
          value={1}
        />
        <IconWrapper>
          <Plus size={14} weight='fill' />
      </IconWrapper>
    </QuantityEntryContainer>
  );
}