import React, { useState, useEffect } from 'react';
import apiURL from './api';
import { ItemsList } from './components/ItemsList';
import { AddItem } from './components/AddItem';


export const App = () => {
  
  const [resoursceType, setResourceType] = useState('Long time no see!')
  const [items, setItems] = useState ([]);
  const [viewItems, setViewItems] = useState(false);
  const [singleItem, setSingleItem] = useState([])
  const [isAddingItem, setIsAddingItem] = useState(false)
  
  // ------------- Tier 1 ------------- //
  //Function to fetch all the items
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
    setResourceType('All your Items')
    setViewItems(true) 
  }

  const addButtonClicked = () => {
    setIsAddingItem(true)
  }

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchSingleItem () {
    try {
    const response = await fetch('http://localhost:3000/items/8');
    const oneItem = await response.json();
    setSingleItem(oneItem);
    console.log(oneItem);
    } catch (err) {
      console.log('Oh no an error!', err)
    }
  }

  useEffect(()=> {
    fetchSingleItem();
  }, [])

  return (
      <main className='container'>
        <div>
          <h1>Stock Management</h1>
          {/* <h3>{singleItem}</h3> */}
          <h3>Please click on the buttons to retrieve information</h3>
          <button className='btn' onClick={()=> clicked()}>View All Items</button>
          <button className='btn' onClick={()=> setResourceType('Here there is a single Item')}>View a Single Item</button>
          <button className='btn' onClick={addButtonClicked}>Create Item</button>
          <button className='btn' style={{background: 'red'}} onClick={()=> setResourceType('Are you sure you want to delete an Item?')}>Remove an Item</button>
          <button className='btn' onClick={()=> setResourceType('Edit or update an Item')}>Edit or Update</button>
        </div>
        {isAddingItem ? <AddItem/> : <h1>We hope you are having a great day,</h1>}
        <h1>{resoursceType}</h1>
        
        {
        (viewItems) && <ItemsList items={items} setItems={setItems} fetchItems={fetchItems}/>
        }
        
        
      </main>
    
  );
}

export default App;
