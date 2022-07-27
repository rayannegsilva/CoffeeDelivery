import { ButtonsContainer, HeaderContainer, Buttons} from "./styles";
import coffeeLogo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
  return(
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogo} alt="" />

        <ButtonsContainer>
          <Buttons variant="purple">
          <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Buttons>

          <Buttons variant="yellow">
            <ShoppingCart size={22} weight="fill" />
          </Buttons>
        </ButtonsContainer>
      </div>
    </HeaderContainer>
  );
}