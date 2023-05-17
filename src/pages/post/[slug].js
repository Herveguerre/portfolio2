import Layout from "@/components/layout/Layout";
import { createClient } from "contentful";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

// 1 connection contentful
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//2 generer ou recuperer les slug des articles
export async function getStaticPaths() {
  // recupere la data  (post ) dans contentful
  const res = await client.getEntries({
    content_type: "escciBlog",
  });

  //3 recupere les slug
  const slugs = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  // renvoi tous les slug dans paths ( chemin )
  return {
    paths: slugs,
    fallback: false, // tous les chemin qui n'existe pas renvoi a 404
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "escciBlog",
    "fields.slug": params.slug,
  });
  const post = res.items;
  return {
    props: {
      post: post[0],
    },
  };
}

export default function Index({ post }) {
  const { title, content,photo } = post.fields;
  console.log(post);
  return (
    <Layout>
      <div className=" bg_section3">
        <div className=" card_sec3_slug">
          <p className="slug_title">{title}</p>
          <div className="card_slug_content">
            {documentToReactComponents(content)}
          </div>
          <img src={post.fields.featuredImage.fields.file.url} alt={title} /> 
          {photo.map((file) => (
            <div key={file.sys.id}>
              <img src={file.fields.file.url} alt={file.fields.title} />
            </div>
          ))}
          <Link href="/"><button className="btn_sec3" >retour</button></Link>
        </div>       
      </div>
    </Layout>
  );
}
