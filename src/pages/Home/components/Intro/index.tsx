import { AdvantageContainer, Content, IntroContainer, Title } from "./styles";
import introImg from '../../../../assets/intro-img.png'
import { TextType, TitleType } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Intro(){
  return(
    <IntroContainer>
      <Content className="container">
        <div>
          <section>
            <Title color="title" size="xl">Encontre o café perfeito para qualquer hora do dia</Title>
            <TextType color="subtitle" size="l">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</TextType>
          </section>

          <AdvantageContainer>        
              <InfoWithIcon 
                color="yellow_dark"
                icon={<ShoppingCart weight="fill" size={16}/>}
                text='Compra simples e segura'
                />
             
             <InfoWithIcon 
                color="gray"
                icon={<Package weight="fill" size={16}/>}
                text='Embalagem mantém o café intacto'
                />

              <InfoWithIcon 
                color="yellow"
                icon={<Timer weight="fill" size={16}/>}
                text='Entrega rápida e rastreada'
                /> 

                <InfoWithIcon 
                color="purple"
                icon={<Coffee weight="fill" size={16}/>}
                text='O café chega fresquinho até você'
                /> 
          </AdvantageContainer>
        </div>

        <img src={introImg} />
      </Content>
    </IntroContainer>
  );
}