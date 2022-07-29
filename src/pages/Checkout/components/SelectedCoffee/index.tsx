import { TitleType } from "../../../../components/Typography";
import { SelectedCoffeeContainer } from "./styles";

export function SelectedCoffee() {
  return(
    <SelectedCoffeeContainer>
       <TitleType size='xs' color='subtitle'>Cafés Selecionados</TitleType>
    </SelectedCoffeeContainer>
  );
}