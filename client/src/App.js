import React from 'react'
import { Route, Routes } from 'react-router-dom';
// carousal css 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Home } from './Pages/Home';
import SinglePage from './Pages/SinglePage';
import Delivery from './Pages/Delivery';
import DineOut from './Pages/Dine_out';
import NightLife from './Pages/NightLife';
import Restaurant from './Pages/Restaurant';
import Error from './Pages/Error';
import Order from './Pages/Order';
import Overview from './Components/Restaurant/Overview';
import Review from './Components/Restaurant/Review';
import Gallery from './Components/Restaurant/Gallery';
import Menu from './Components/Restaurant/Menu';
import OrderNow from './Components/Restaurant/OrderNow';

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<Home />}>
          <Route index element={<Delivery />} />
          <Route path='Delivery' element={<Delivery />} />
          <Route path='Dining' element={<DineOut />} />
          <Route path='Nightlife' element={<NightLife />} />
        </Route>

        <Route path='' element={<SinglePage />}>
          <Route path=':type/:id' element={<Restaurant />} >
            <Route path='overview' element={<Overview />} />
            <Route path='order' element={<OrderNow />} />
            <Route path='reviews' element={<Review />} />
            <Route path='photos' element={<Gallery />} />
            <Route path='menu' element={<Menu />} />
          </Route>
        </Route>
        <Route path='/:type/:id/cart' element={<Order />} />

        <Route path='*' element={<Error />} />

      </Routes>
    </>

  );
}

export default App;
