import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { InputForm } from "../../../../components/InputForm";
import { TitleType } from "../../../../components/Typography";

import { SectionHeader } from "../SectionHeader";
import { AddressFormContainer, CompleteOrderContainer, CompleteOrderForm, PaymentContainer } from "./styles";


export function CompleteOrder(){
  const { colors } = useTheme();

  return(
    <CompleteOrderContainer>
      <TitleType size='xs' color='subtitle'>Complete seu pedido</TitleType>

      <CompleteOrderForm>
        <SectionHeader 
          title='Endereço de Entrega' 
          subtitle='Informe o endereço onde deseja receber seu pedido' 
          icon={<MapPinLine size={22} color={colors["yellow-dark"]}/>}
          />


          <AddressFormContainer>
            <InputForm
              placeholder='CEP'
              type='number'
              className='cep'
            />
             <InputForm
              placeholder='Rua'
              className='street'
            />
            <InputForm 
              placeholder='Número'
              type='number'
            />
            <InputForm 
              placeholder='Complemento'
              className='complement'
            />
            <InputForm 
              placeholder='Bairro'
              type='number'
            />
            <InputForm 
              placeholder='Cidade'
              type='number'
            />
            <InputForm 
              placeholder='UF'
              type='number'
            />
          </AddressFormContainer>
      </CompleteOrderForm>

      <CompleteOrderForm>
      <SectionHeader 
          title='Pagamento' 
          subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar' 
          icon={<CurrencyDollar size={22} color={colors["purple-primary"]}/>}
          />

        <PaymentContainer>
          
        </PaymentContainer>
      </CompleteOrderForm>
    </CompleteOrderContainer>
  );
}