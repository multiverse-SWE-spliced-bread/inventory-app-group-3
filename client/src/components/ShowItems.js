import React from 'react';
import { Item } from './Item';

export const ShowItems = ({items}) => {
    return <>
        {
            items.map((item, idx) => {
                return <Item item={item} key={idx} />
            })
        }
    </>
}