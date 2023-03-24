import React from 'react'
import "./style.css"

function Box(props) { 
  return (
    <div className='box' onClick={props.data2}>
        <h1>{props.data1}</h1>
    </div>
  )
}

export default Box