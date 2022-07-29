import { CompleteOrder } from "./components/CompleteOrder";
import { SelectedCoffee } from "./components/SelectedCoffee";
import { CheckoutContainer } from "./styles";

export function Checkout(){
  return(
    <CheckoutContainer className='container'>
      <CompleteOrder />
      <SelectedCoffee />
    </CheckoutContainer>
  );
}