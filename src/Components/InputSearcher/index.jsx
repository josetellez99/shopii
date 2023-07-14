import React from 'react'

function InputSearcher (props) {

    const handleInputChange = (event) => {
        props.setInputValue(event.target.value)
    }


    return (
        <div className="input-searcher mb-4">
            <form>
                <input 
                    className='border border-black h-9 w-80 rounded-lg px-2' 
                    placeholder='Search your prodcuts' 
                    type="text"
                    value={props.inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

export { InputSearcher }