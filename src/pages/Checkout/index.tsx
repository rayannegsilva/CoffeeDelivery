import { CompleteOrder } from "./components/CompleteOrder";
import { CheckoutContainer } from "./styles";

export function Checkout(){
  return(
    <CheckoutContainer className='container'>
      <CompleteOrder />
      <h1>OI</h1>
    </CheckoutContainer>
  );
}