import React, { useState, useEffect} from "react";

export const AddItem = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:3000/items', {
            method: "POST",
            headers: {
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(
                {
                    title: title,
                    description: description,
                    price: price,
                    category: category,
                    image: image
                }
            )

        })
        const data = await response.json();

        setTitle('')
        setDescription('')
        setPrice(0)
        setCategory('')
        setImage('')
    }


    return (
        <main>
            <form className="container" id="form-container" onSubmit={handleSubmit}>
                <h1>Inventory App</h1>
                <h2>Add a new Item</h2>
                <lable></lable>
                <div id="txt-box-container">
                    <input className="input-field" type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <input className="input-field" type='text' placeholder='Description' value={description} onChange={(e) => setTitle(e.target.value)}/>
                    <input className="input-field" type='text' placeholder='Price' value={price} onChange={(e) => setTitle(e.target.value)}/>
                    <input className="input-field" type='text' placeholder='Category' value={category} onChange={(e) => setTitle(e.target.value)}/>
                    <input className="input-field" type='text' placeholder='Image' value={image} onChange={(e) => setTitle(e.target.value)}/>
                    <button className="btn" id='submit-btn' type="Submit">Submit</button>
                </div>
            </form>
        </main>
    )
}



