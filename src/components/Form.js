import React from 'react'

function Form({handleInput, handleRegion, handleSubmit}) {
    return (
        <form id="stock-form" onSubmit={(e) => {handleSubmit(e)}}>
            <label htmlFor="stock-input" >Enter stock name</label>
            <input id="stock-input" type="text" onChange={(e) => handleInput(e.target.value)} />
            <label htmlFor="reg-input">Enter region</label>
            <input id="reg-input" onChange={(e) => {handleRegion(e.target.value)}} type="text" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form
