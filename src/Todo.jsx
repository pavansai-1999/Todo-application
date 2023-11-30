import React, { useState } from 'react'
import "./App.css"

const Todo = () => {
    const [data, setData] = useState('')
    const [arraydata, setarrayData] = useState([])

    //adding items one by one in form of array
    const addItemsArray = () => {
        //if data is empty throws alert
        if (!data) {
            alert('add any item')
        }
        //updates items
        else {
            setarrayData([...arraydata, data])
            setData('')
            
        }

    }
    //removing all items
    const removeAll = () => {
        setarrayData([])
    }

    //delete each item
    const deleteItem = (id) => {
        //console.log(id)
        const updatedData = arraydata.filter((ele, ind) => {
         return ind !== id

        })
        setarrayData(updatedData)
    }


    return (
        <div className='main-div'>
            <div className='child-div'>
                <i class="fa-solid fa-list"></i>
                <figure>
                    <img src="https://th.bing.com/th/id/OIP.EU71Qa0yDWXZd_GzfWYjJwHaHa?rs=1&pid=ImgDetMain" alt="2022 Todo List Logo" />
                    <figcaption>Add Your List Here ✌</figcaption>
                </figure>
                <div className='addItems'>
                    <input placeholder='add any item' value={data} onChange={(e) => { setData(e.target.value) }}>

                    </input>
                    <button type='button' >
                        <i class="fa-solid fa-plus" onClick={addItemsArray}></i>
                    </button>
                </div>
                <div className='showItems'>
                    {
                        arraydata.map((ele, id) => {
                            return (
                                <>
                                    <div className='eachItem' key={id}>
                                        <h3>{ele}</h3>
                                        <button>
                                            <i class="fa-solid fa-trash-can" onClick={() => { deleteItem(id) }}>
                                            </i>
                                        </button>

                                    </div>

                                </>
                            )

                        })
                    }

                </div>

                <div className='showItems'>
                    <div>
                    <button className='buttonclear' onClick={removeAll}>
                    clear list
                    </button></div>
                </div>
            </div>
        </div>

    )
}

export default Todo