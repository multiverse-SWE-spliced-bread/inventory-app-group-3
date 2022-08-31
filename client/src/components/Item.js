import apiURL from '../api';
import { useState, useEffect } from 'react';

export const Item = ({item}) => {
    
    const [items, setItems] = useState ([]);

    async function singleItem(){
        try{
            const res = await fetch(`${apiURL}/items/`);
            const itemData = await res.json();
            console.log(itemData);
            setItems([itemData]);
        }   catch (err) {
            console.log('Oh no an error!', err)
        }
    }
}
