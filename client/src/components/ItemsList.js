import React from "react";

export const ItemsList = ({items}) => {
    return<>
    {
        items.map((item, idx) => {
            return <Item item={item} key={idx}/>
        })
    }
    
    </>
}