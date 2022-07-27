import { ShoppingCart } from 'phosphor-react';
import expressCoffee from '../../assets/expresso.png'
import { Title } from '../../pages/Home/components/Intro/styles';
import { QuantityEntry } from '../QuantityEntry';
import { TextType, TitleType } from '../Typography';
import { AboutText, AddCartWrapper, CoffeeCardFooter, CoffeeContainer, CoffeeTag, PriceAmount } from './styles';

export interface Coffee {
  id: number;
  name: string;
  about: string;
  tags: string[];
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps){
  return(
    <CoffeeContainer>
      <img src={coffee.photo} alt="" />

      <CoffeeTag>
        {
          coffee.tags.map(tag => (
            <span key={`${coffee.id}${tag}`}>{tag}</span>
          ))}
      </CoffeeTag>

      <TitleType size="s" color="subtitle">{coffee.name}</TitleType>

      <AboutText>
        {coffee.about}
      </AboutText>

      <CoffeeCardFooter>
        <PriceAmount>
          <TextType size='s'>R$</TextType>
          <TitleType size='m' as='strong'>{coffee.price}0</TitleType>
        </PriceAmount>

        <AddCartWrapper>
          <QuantityEntry />
          <button>
            <ShoppingCart size={22} weight='fill'/>
          </button>
        </AddCartWrapper>
      </CoffeeCardFooter>
    </CoffeeContainer>
  );
}