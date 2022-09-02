import React from 'react';

export const ItemsList = ({items}) => {
	// // the data that will run when a title is clicked
	// const clickHandler = (item) => {
	// 	// changes the current page. afaik, the main page is PagesList, so I setCurrentPage(0) in App.js which represents PagesList.
	// 	setCurrentPage(1)
	// 	// this will make the page data visible
	// 	setViewPage(page)

	// }

    // const returnHandler = (homepage) => {
	// 	// changes the homepage.
	// 	setCurrentPage(0)
	// 	// this will make the page data visible
	// 	setViewPage({})

	// }


	return <>
			{
				items.map((item, i) => {
					return <h3 key={i}
					>{items.title}</h3>
				})
			}
	</>
} 
