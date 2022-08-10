import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityEntryContainer } from "./styles";

type QuantityEntrySize = {
  size?: 'small' | 'medium';
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function QuantityEntry({ onIncrease, onDecrease, quantity, size='medium' } : QuantityEntrySize) {
  return(
    <QuantityEntryContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight='fill' />
      </IconWrapper>
        <input 
          type='number'
          readOnly
          value={quantity}
        />
        <IconWrapper onClick={onIncrease}>
          <Plus size={14} weight='fill' />
      </IconWrapper>
    </QuantityEntryContainer>
  );
}