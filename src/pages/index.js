import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navigation/NavBar'
import Footer from '@/components/footer/Footer'
import { createClient } from 'contentful'

import Card_1 from '@/components/cards/Card_1'
import Link from 'next/link'




export default function Home({posts}) {
  console.log(posts);
  
  return (
    
    <div>
      <NavBar/>
      <h1 className='text-red-500 text-center pt-9 ' >Home</h1>

      {posts.map((post)=>
      <Link href={`post/${post.fields.slug}`} >
      <Card_1 
        key={post.sys.id}
        title={post.fields.title}
        except={post.fields.except}
        img={post.fields.featuredImage.fields.file.url}
        
      />
      </Link>
      )}

      <Footer/>
    </div>
  )
}



export async function getStaticProps(){
  // 1 conect contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  //2 recuperer la data en cas de sucses
  const data = await client.getEntries({
    content_type:"escciBlog",
    order:"sys.createdAt",
    limit:8,
  });

  //3 envoi la data dans props
  return{
    props:{
      posts:data.items,
    },
    
  };
}