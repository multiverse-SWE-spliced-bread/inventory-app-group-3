import React from "react";

export const ItemsList = ({items}) => {
    return(<>
        {
            items.map((item, idx) => {
                return <>
                    <div id="single-item-container">
                        {<img src="${item.image}"/>}
                        <h3>{item.title}</h3>
                    </div>
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
