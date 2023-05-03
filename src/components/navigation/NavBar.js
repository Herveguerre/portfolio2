import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (   
        <div className='header' >   
               <h1>read<span>it</span>.</h1> 
               
            <ul className='nav' >
                
                <Link href='/' >
                    <li>Home</li>
                </Link>
                <Link href='/About' >
                    <li>About</li>
                </Link>               
                <Link href='/Contact' >
                    <li>Contact</li>
                </Link>
                <Link href='/post/564' >
                    <li>Voir post</li>
                </Link>
                
            </ul>
            <div className='hero' >
                <p>Hello! Welcome to</p>
                <h2>Readit blog</h2>
                <p>Far far away, behind the world mountains, far from the countries Vocalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.  </p>
                <p className='logo_header' >&#x21e3;</p>
            </div>
        </div>
    )
}
