import Link from 'next/link'
import React from 'react'


export default function NavBar_2() {
    return (   
        

<div className='bg_header' >
<h1 className='container' >Hervé <span>.</span><span className='span' > _</span> </h1>
  <div className='header container' >             
      <ul className='nav' >              
          <Link href='/' ><li>// Acueil</li></Link>
          <Link href='/' ><li>// Compétence</li></Link>
          <Link href='/' ><li>// Travail</li></Link>
          <Link href='/' ><li>// Expérience</li></Link>
          <Link href='/Contact' ><li>// Contact</li></Link>        
      </ul>
      <Link href='/' >
        <div className="spinner  ">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> </Link>          
  </div>
</div>
    )
}
