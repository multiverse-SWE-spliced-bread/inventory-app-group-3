import React from "react";

export const ItemsList = ({items}) => {
    return(<>
        {
            items.map((item, idx) => {
                return <>
                    <h3>{item.title}</h3>
                </>
            })
        }
    </>)
}
