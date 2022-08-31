import React, {useState} from 'react'

function toDoForm (props) {
    const [input, setInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();

    props.onSubmit({
        id:Math.floor(Math.random()*100),
        text: input
    })
    };

    return(
        <form className='ToDo-form' onSubmit={handleSubmit}>
            <input 
            className='todo-input'
            type='text'
            placeholder='ToDo'
            value={input}
            name='text'
            />
            <button className='todo-btn'>Do it!</button>
        </form>
    )
};
