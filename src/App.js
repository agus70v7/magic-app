import React from 'react';
import './App.css';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <ItemListContainer/>
   </div>
  )
}

function App() {
  return (
    <div className="App">
    <CartWidget/>
   </div>
  )
}
export default App;