import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (   
        <div>       
            <ul className='flex gap-4 p-2' >
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
        </div>
    )
}
