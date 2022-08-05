import { Route, Routes } from 'react-router-dom';
import { LayoutDefault } from './layout/LayoutDefault';
import { Checkout } from './pages/Checkout';
import { CompleteOrder } from './pages/CompleteOrder';
import { Home } from './pages/Home';

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home /> }/>
        <Route path="/checkout" element={<Checkout /> }/>
        <Route path='/checkout/confirmation' element={<CompleteOrder />}/>
      </Route>
    </Routes>
  );
}