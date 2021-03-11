import React from 'react'

const Messages = () => {
    return (
        <div className="messages">
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
                       the leap into electronic typesetting, remaining essentially 
                       unchanged. It was popularised in the 1960s with the 
                       release of Letraset sheets containing Lorem Ipsum passages, 
                       and more recently with desktop publishing software like 
                       Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Messages
