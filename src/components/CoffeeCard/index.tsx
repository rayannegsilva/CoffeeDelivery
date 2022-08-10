import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import expressCoffee from '../../assets/expresso.png'
import { useCart } from '../../hooks/useCart';
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
  const { addCoffeeToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleIncrease(){
    setQuantity(state =>  state + 1);
  }

  function handleDecrease(){
    setQuantity(state => state - 1);
  }

  function handleAddToCart(){
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd);
  }

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
          <QuantityEntry
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease} 
            size='medium'
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight='fill'/>
          </button>
        </AddCartWrapper>
      </CoffeeCardFooter>
    </CoffeeContainer>
  );
}