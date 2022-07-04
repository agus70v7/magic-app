import React from 'react';
import { ItemCount } from './components/Cart/ItemCount';
import { CartWidget } from './components/CartWidget';
import { NavBar } from './components/UI/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CartWidget />
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}

export default App;