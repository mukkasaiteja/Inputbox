import React from 'react'
import { useSelector } from 'react-redux'
import './text.css'

function Text() {
    const select =useSelector((data)=>{return data});
  return (
    <div className='main'>
        <h2>You can see here what you wrote in text-box🥰🥰</h2>
        <p>{select.name}</p>
    </div>
  )
}

export default Text