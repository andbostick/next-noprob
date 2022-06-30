import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import groq from "groq";
import LargeGrid from "../components/LargeGrid";
import PostsGrid from "../components/PostsGrid";
import client from "../client";
import Footer from "../components/Footer";
import Search from "../components/Search";

export default function Home({ posts, title }) {
  const [search, setSearch] = useState("");
  const [searchPost, setSearchPost] = useState("");
  const [reset, setReset] = useState(false);
 
  return (
    <main>
      <Header title={title} />
      <Search setSearch={setSearch} setReset={setReset} setSearchPost={setSearchPost} reset={reset} search={search} searchPost={searchPost}/>
      {searchPost.length ? (
        <div>
          <LargeGrid articles={searchPost} />
          <section>
            <PostsGrid articles={searchPost} />
          </section>
        </div>
      ) : (
        <div>
          <LargeGrid articles={posts} />
          <section>
            <PostsGrid articles={posts} />
          </section>
        </div>
      )}
      <Footer />
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
  const title = await client.fetch(groq`
  *[_type == 'main']`);
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);

  return {
    props: {
      posts,
      title,
    },
  };
}
