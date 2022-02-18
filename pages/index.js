import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import LargeGrid from "../components/LargeGrid";
import PostsGrid from "../components/PostsGrid";
import client from "../client";



export default function Home({post}) {
  console.log(post)
  console.log(post[0].slug.current)
  return (
    <main>
      <Header />
      
      <LargeGrid articles={post} />
      <section>
        <PostsGrid articles={post}/>
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
  
  const post = await client.fetch(`
    *[_type == "post"]
  `)
  return {
    props: {
      post
    }
  }
}
