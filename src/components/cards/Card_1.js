import Link from 'next/link'
import React from 'react'

export default function Card_1({title,img,except,slug,id}) {

  return (
    <div className='bg-blue-200 m-20 text-center w-1/3 grid-cols-2' >       
      
        <p className='text-2xl pt-[100px]' >{title}</p>
        <p className='text-blue-600' >{except}</p>
        <div className='item-center p-5' >
          <img className='w-[400px] ' src={img} alt={title} />
        </div>
    </div>
  )
}
