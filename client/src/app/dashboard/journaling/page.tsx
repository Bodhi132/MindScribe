import React from 'react'
import './styles.css'
import ChatWindow from '@/app/component/Chat/ChatWindow'

const page = () => {
  return (
    <div className='main'>
        <section className='chat-section'>
            <ChatWindow/>
        </section>
        <section className='mood-section'>
            q
        </section>
    </div>
  )
}

export default page