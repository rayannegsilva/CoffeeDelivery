import { ButtonsContainer, HeaderContainer, Buttons} from "./styles";
import coffeeLogo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header(){
  const { cartQuantity } = useCart();

  return(
    <HeaderContainer>
      <div className="container">
        <Link to='/'>
          <img src={coffeeLogo} alt="" />
        </Link>

        <ButtonsContainer>
          <Link to='/'>
            <Buttons variant="purple">
              <MapPin size={22} weight="fill" />
                Porto Alegre, RS
            </Buttons>
          </Link>

          <Link to='/checkout'>
            <Buttons variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={22} weight="fill" />
            </Buttons>
          </Link>
        </ButtonsContainer>
      </div>
    </HeaderContainer>
  );
}