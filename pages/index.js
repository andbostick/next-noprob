import Head from "next/head";
import Header from "../components/Header";
import groq from 'groq'
import LargeGrid from "../components/LargeGrid";
import PostsGrid from "../components/PostsGrid";
import client from "../client";



export default function Home({posts}) {
  console.log(posts)
  
  return (
    <main>
      <Header />
      
      <LargeGrid articles={posts} />
      <section>
        <PostsGrid articles={posts}/>
      </section>
      <style jsx>{`
        @media (min-width: 1280px) {
          main {
            width: 75%;
            margin: 0 auto;
          }
          section {
            display: grid;
            gap: 50px;
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </main>
  );
}



export async function getStaticProps() {
  
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}
