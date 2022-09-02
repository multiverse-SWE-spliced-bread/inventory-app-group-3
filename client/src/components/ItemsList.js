import React from "react";

export const ItemsList = ({items}) => {
    return(<>
        {
            items.map((item, idx) => {
                return <>
                    <h3>{item.title}{<img src="${item.image}"/>}</h3>
                </>
            })
        }
    </>)
}

// export const SingleItem = ({item}) => {
//     return(<>
//         {
//             item.map((item, idx) => {

//             } )
//         }
//     </>)
// }
