import React, { useState, useEffect } from 'react';
import apiURL from './api';


export const App = () => {
  
  const [resourscType, setResourceType] = useState('Items')
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
      <main className='container'>
        <h1>Inventory App</h1>
        <h3>Please click on the buttons to retrieve information</h3>
        <button className='btn' onClick={()=> setResourceType('items')}>View All Items</button>
        <button className='btn' onClick={()=> setResourceType('singleItem')}>View a Single Item</button>
        <button className='btn' onClick={()=> setResourceType('addItem')}>Add an Item</button>
        <button className='btn' style={{background: 'red'}} onClick={()=> setResourceType('removeItem')}>Remove an Item</button>
        <button className='btn' onClick={()=> setResourceType('editUpdate')}>Edit or Update</button>
      </main>
    
  );
}

export default App;
