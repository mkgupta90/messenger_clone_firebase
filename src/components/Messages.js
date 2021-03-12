import React, { useContext } from 'react'
import Input from './Input'
import { ContextProvider } from '../context/ContextProvider'

const Messages = () => {

    const { allMsg, user } = useContext(ContextProvider);

    return (
        <div className="messages">

            {allMsg.map(message => message.email === user.email ? 
                (
                <div className="messages__my" key={message.id}>
                    <div className="messages__my-p">
                        <p>
                            {message.msg}
                        </p>
                    </div>
                </div>
                ) : 
                (
                <div className="messages__other" key={message.id}>
                    <div className="messages__other-img">
                        <img src={message.photo} alt={message.photo} />
                    </div>
                    <div className="messages__other-msg">
                        <span>{message.username}</span>
                        <p>
                            {message.msg}
                        </p>
                    </div>
                </div>
                )
            )}                  
            {/* Input Field */}
            <Input />
        </div>
    )
}

export default Messages



/*
import React, { useContext } from 'react'
import Input from './Input'
import { ContextProvider } from '../context/ContextProvider'

const Messages = () => {

    const { allMsg } = useContext(ContextProvider);

    return (
        <div className="messages">

             {/* Other Sender Messages 

            <div className="messages__other">
                <div className="messages__other-img">
                    <img src="/logo192.png" alt="user" />
                </div>
                <div className="messages__other-msg">
                    <span className="messages__other_name">Munna Kumar</span>
                    <p>Lorem Ipsum has been the industry's standard dummy 
                       text ever since the 1500s, when an unknown printer took 
                       a galley of type and scrambled it to make a type specimen 
                       book. It has survived not only five centuries, but also 
                       the leap into electronic typesetting,
                    </p>
                </div>
            </div>
            

             {/* My Messages 
            <div className="messages__my">
                <div className="messages__my-p">
                    <p>
                       Lorem Ipsum has been the 
                    </p>
                </div>
            </div>
            
            {/* Input Field 
            <Input />
        </div>
    )
}

export default Messages
*/



//  {allMsg.map(message => message.email === user.email ? '' : '')}
