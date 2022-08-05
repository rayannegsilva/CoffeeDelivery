import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityEntryContainer } from "./styles";

type QuantityEntrySize = {
  size: 'small' | 'medium';
}

export function QuantityEntry({ size='medium' } : QuantityEntrySize) {
  return(
    <QuantityEntryContainer size={size}>
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