import traditionalEspresso from '../assets/expresso.png'
import americanExpress from '../assets/americano.png'
import creamyEspresso from '../assets/expressoCremoso.png'
import iceExpress from '../assets/cafeGelado.png'
import coffeeWithMilk from '../assets/cafeComLeite.png'
import latte from '../assets/latte.png'
import cappuccino  from '../assets/capuccino.png'
import macchiato from '../assets/macchiato.png'
import mocaccino from '../assets/mocaccino.png'
import hotChocolate from '../assets/chocolateQuente.png'
import cuban from '../assets/cubano.png'
import hawaiian from '../assets/havaiano.png'
import irish from '../assets/irlandes.png'
import arabic from '../assets/arabe.png'

export const coffees = [
  { 
      id: 1,
      name: 'Tradicional Expresso', 
      about: 'O tradicional café feito com água quente e grãos moídos', 
      tags: ['tradicional'],
      photo: traditionalEspresso,
      price: 9.90
  },
  { 
    id: 2,
    name: 'Expresso Americano', 
    about: 'Expresso diluído, menos intenso que o tradicional', 
    tags: ['tradicional'],
    photo: americanExpress,
    price: 9.90
  },
  { 
    id: 3, 
    name: 'Expresso Cremoso', 
    about: 'Café expresso tradicional com espuma cremosa', 
    tags: ['tradicional'],
    photo: creamyEspresso,
    price: 9.90
  },
  { 
    id: 4, 
    name: 'Expresso Gelado', 
    about: 'Bebida preparada com café expresso e cubos de gelo', 
    tags: ['tradicional','gelado'],
    photo: iceExpress,
    price: 9.90
  },
  { 
    id: 5, 
    name: 'Café com leite', 
    about: 'Meio a meio de expresso tradicional com leite vaporizado', 
    tags: ['tradicional','com leite'],
    photo: coffeeWithMilk,
    price: 9.90
  },
  { 
    id: 6, 
    name: 'Latte', 
    about: 'Uma dose de café expresso com o dobro de leite e espuma cremosa', 
    tags: ['tradicional', 'com leite'],
    photo: latte,
    price: 9.90
  },
  { 
    id: 7, 
    name: 'Cappuccino', 
    about: 'Bebida com canela feita de doses iguais de café, leite e espuma', 
    tags: ['tradicional', 'com leite'],
    photo: cappuccino,
    price: 9.90
  },
  { 
    id: 8, 
    name: 'Macchiato', 
    about: 'Café expresso misturado com um pouco de leite quente e espuma', 
    tags: ['tradicional', 'com leite'],
    photo: macchiato,
    price: 9.90
  },
  { 
    id: 9, 
    name: 'Mocaccino', 
    about: 'Café expresso com calda de chocolate, pouco leite e espuma', 
    tags: ['tradicional', ' com leite'],
    photo: mocaccino,
    price: 9.90
  },
  { 
    id: 10, 
    name: 'Chocolate Quente', 
    about: 'Bebida feita com chocolate dissolvido no leite quente e café', 
    tags: ['especial', 'com leite'],
    photo: hotChocolate,
    price: 9.90
  },
  { 
    id: 11, 
    name: 'Cubano', 
    about: 'Drink gelado de café expresso com rum, creme de leite e hortelã', 
    tags: ['especial', 'alcoólico', 'gelado'],
    photo: cuban,
    price: 9.90
  },
  { 
    id: 12, 
    name: 'Havaiano', 
    about: 'Bebida adocicada preparada com café e leite de coco', 
    tags: ['especial'],
    photo: hawaiian,
    price: 9.90
  },
  { 
    id: 13, 
    name: 'Arábe', 
    about: 'Bebida preparada com grãos de café árabe e especiarias', 
    tags: ['especial'],
    photo: arabic,
    price: 9.90
  },
  { 
    id: 14, 
    name: 'Irlandês', 
    about: 'Bebida a base de café, uísque irlandês, açúcar e chantilly', 
    tags: ['especial', 'alcoólico'],
    photo: irish,
    price: 9.90
  },
];