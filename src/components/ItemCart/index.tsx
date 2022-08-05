import { ActionsContainer, ButtonRemove, DetailsContainer, InfoContainer, ItemCartContainer } from "./styles";
import imgCoffee from '../../assets/cafecomLeite.png';
import { TextType } from "../Typography";
import { QuantityEntry } from "../QuantityEntry";
import { Trash } from "phosphor-react";

export function ItemCart(){
  return (
    <ItemCartContainer>
      <InfoContainer>
        <img src={imgCoffee} alt="" />

        <DetailsContainer>
          <TextType color='subtitle'>Expresso Tradicional</TextType>

          <ActionsContainer>
              <QuantityEntry size='small'/>
              <ButtonRemove>
                <Trash size={16}/>
                <TextType size='s'>Remover</TextType>
              </ButtonRemove>
          </ActionsContainer>
        </DetailsContainer>
      </InfoContainer>
   
      <p>R$ 9,90</p>
    </ItemCartContainer>
  );
}