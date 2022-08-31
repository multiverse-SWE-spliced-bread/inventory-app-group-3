import React, { useState, useEffect } from 'react';
import { ShowItems } from './components/ShowItems';
import apiURL from './api';


export const App = () => {
  
  const [items, setItems] = useState ([]);
  
  async function fetchItems(){
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemData = await response.json();
      setItems(itemData);
      console.log(itemData)
    } catch (err) {
      console.log('Oh no an error!', err)
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
      <div>
         <h1>Hello</h1>
      </div>
    
  );
}

export default App;
