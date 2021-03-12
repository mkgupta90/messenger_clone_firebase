import React, { useContext, useState } from 'react';
import { ContextProvider } from '../context/ContextProvider'

const Input = () => {
    const { sendMessage } = useContext(ContextProvider);

    //State
    const [msg, setMsg] =useState('');

    // HandleSubmit
    const sendMsg = (e) => {
        e.preventDefault();
        sendMessage(msg);
        setMsg("");
    }
    return (
        <div className="input__form">
            <form onSubmit={sendMsg}>
             <input className="input__control"
                    type="text" 
                    name="" 
                    placeholder="Write Message..." 
                    onChange={ (e) => setMsg(e.target.value)}
                    value={msg}
                    required />
            </form>
        </div>
    )
}

export default Input
