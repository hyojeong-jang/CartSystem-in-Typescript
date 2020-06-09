import React from 'react';

import Header from './components/Header'
import Item from './components/Item';
import Discount from './components/Discount';
import Cart from './components/Cart';


function App() {
  return (
    <div className='App'>
      <Header name='Hyojeong' />
      <Item />
      <Discount />
      <Cart />
    </div>
  );
}

export default App;
