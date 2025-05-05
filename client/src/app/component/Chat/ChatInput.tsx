import React from 'react'
import './styles.css'
import { IoSendSharp } from "react-icons/io5";

const ChatInput = () => {
    return (
        <div>
            <div className='input-main'>
                <textarea placeholder='write it out.'></textarea>
                <button className='iconHolder'>
                    <IoSendSharp />
                </button>
            </div>
        </div>
    )
}

export default ChatInput