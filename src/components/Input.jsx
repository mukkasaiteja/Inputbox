import React, { useState } from 'react'
import Myredux from './Storedata'
import './Input.css'

function Input() {
    const [type,setType]=useState()
    const handleRedux=()=>{
        Myredux.dispatch({type:'name' ,username:type})
    }
  return (
    <div className='div'>
      <h1>Input app</h1>
        <input type="text" placeholder='Type here what you are thing '  onChange={(e)=>{
            setType(e.target.value)
        }} />
        <button onClick={handleRedux}>submit

        </button>
    </div>
  )
}

export default Input