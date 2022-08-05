import { Link } from "react-router-dom";
import { ItemCart } from "../../../../components/ItemCart";
import { TextType, TitleType } from "../../../../components/Typography";
import { ButtonConfirmation, Footer, OrderDetailsContainer, SelectedCoffeeContainer } from "./styles";

export function SelectedCoffee() {
  return(
    <SelectedCoffeeContainer>
       <TitleType size='xs' color='subtitle'>Cafés Selecionados</TitleType>
       <OrderDetailsContainer>
          <ItemCart />
          <ItemCart />
          <ItemCart />

          <Footer>
            <div>
              <TextType size='s'>Total de itens</TextType>
              <TextType size='m'>R$ 29,90</TextType>
            </div>
            <div>
            <TextType size='s'>Entrega</TextType>
              <TextType size='m'>R$ 3,50</TextType>
            </div>
            <div>
              <TextType size='l' weight='700' color='subtitle'>Entrega</TextType>
              <TextType size='l' weight='700' color='subtitle'>R$ 33,20</TextType>
            </div>

            <Link to='/checkout/confirmation'>
                <ButtonConfirmation>
                  Confirmar
                </ButtonConfirmation>
              </Link>
            
       </Footer>
       </OrderDetailsContainer>
    </SelectedCoffeeContainer>
  );
}