import { CoffeeCard } from "../../../../components/CoffeeCard";
import { coffees } from "../../../../utils/coffees";
import { Title } from "../Intro/styles";
import { CoffeeListContainer, CoffeeListContent } from "./styles";

export function CoffeeList(){
  return(
    <CoffeeListContainer className="container">
      <Title color='subtitle' size='l'>Nossos Cafés</Title>

      <CoffeeListContent>
       {coffees.map((coffee) =>(
         <CoffeeCard 
            key={coffee.id}
            coffee={coffee}
          />
       ))}
      </CoffeeListContent>
    </CoffeeListContainer>
  );
}