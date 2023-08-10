import { Button } from 'bootstrap'
import React from 'react'

function New(props) {
  return (
    <div className={props.class}>
      <div className='content'>
      <h1 className='head1'>{props.head}</h1>
        <p className='para1'>{props.para}</p>
        <button>Show More</button>
        </div>
    </div>
  )
}

export default New
