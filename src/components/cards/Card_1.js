
import React from 'react'

export default function Card_1({title,img,except,slug,id}) {

  return (
    <div className='card_sec3' >   
        <div className='card_img' >
          <img src={img} alt={title} />
        </div>
        <p className='card_title' >{title}</p>
        <p className='card_except' >{except}</p>       
    </div>
  )
}
