import React, { useState, useEffect } from 'react';

import apiURL from './api';
import { ItemsList } from './components/ItemsList';


export const App = () => {
  
  const [resoursceType, setResourceType] = useState('Wecome to your Inventory App')
  const [items, setItems] = useState ([]);
  const [viewItems, setViewItems] = useState(false);
  
  async function fetchItems(){
    try {
      const response = await fetch('http://localhost:3000/items');
      const itemData = await response.json();
      setItems(itemData);
      console.log(itemData)
    } catch (err) {
      console.log('Oh no an error!', err)
    }
  }

  const clicked = () => {
        
    setViewItems(true) 
}

  useEffect(() => {
    fetchItems();
  }, []);

  return (
      <main className='container'>
        <div>
          <h1>Inventory App</h1>
          <h3>Please click on the buttons to retrieve information</h3>
          <button className='btn' onClick={()=> setResourceType('These are all your Itmes')}>View All Items</button>
          <button className='btn' onClick={()=> setResourceType('Here there is a single Item')}>View a Single Item</button>
          <button className='btn' onClick={()=> setResourceType('Please add Item')}>Add an Item</button>
          <button className='btn' style={{background: 'red'}} onClick={()=> setResourceType('Are you sure you want to delete an Item?')}>Remove an Item</button>
          <button className='btn' onClick={()=> setResourceType('Edit or update an Item')}>Edit or Update</button>
        </div>
        <h1>{resoursceType}</h1>
        <ItemsList items={items} setItems={setItems} fetchItems={fetchItems}/>
        {viewItems ? {resoursceType} : <ItemsList items={items} setItems={setItems} fetchItems={fetchItems}/> }
        <button className='btn' onClick={clicked}>Create Page</button>
      </main>
    
  );
}

export default App;
