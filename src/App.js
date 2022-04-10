import React from 'react';
import './App.css';
import Listing from './components/listing/Listing';
import items from './components/etsy.json';

// const items = JSON.parse(itemsJson);
// console.log(itemsJson);

function App() {
  return (
    <Listing items={items} />
  );
}

export default App;
