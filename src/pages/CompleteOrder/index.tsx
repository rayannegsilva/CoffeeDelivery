
import { TextType } from "../../components/Typography";
import { OrderConfirmationContainer, OrderInfoContainer, Title } from "./styles";
import ConfirmedImg from '../../assets/Illustration.png'
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";


export function CompleteOrder(){
  return(
    <OrderConfirmationContainer className="container">
      <div>
        <Title size='l'>Uhu! Pedido Confirmado</Title>
        <TextType size='l' color='subtitle'>Agora é só aguardar que logo o café chegará até você</TextType>
      </div>
      
        <section>
          <OrderInfoContainer>
            <InfoWithIcon 
              color='purple'
              icon={<MapPin weight='fill'/>}
              text={
                <TextType>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br/>
                  Farrapos - Porto Alegre, RS
                </TextType>
              }
            />
             <InfoWithIcon 
              color='yellow_dark'
              icon={<Timer weight='fill'/>}
              text={
                <TextType>
                   Previsão de entrega<br/>
                  <strong>20 min - 30 min</strong>
                </TextType>
              }
            />
            <InfoWithIcon 
              color='yellow'
              icon={<CurrencyDollar  weight='fill'/>}
              text={
                <TextType>
                  Pagamento na entrega  <br/>
                  <strong>Cartão de Crédito</strong>
                </TextType>
              }
            />
           
          </OrderInfoContainer>

          <img src={ConfirmedImg} alt="" />
        </section>
   
    </OrderConfirmationContainer>
  );
}