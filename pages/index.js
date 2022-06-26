import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import groq from "groq";
import LargeGrid from "../components/LargeGrid";
import PostsGrid from "../components/PostsGrid";
import client from "../client";
import Footer from "../components/Footer";

export default function Home({ posts, title }) {
  const [search, setSearch] = useState('');
  useEffect(() => {
    setSearch(search)
  }, [search])
  console.log(posts);
  let searchedPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(search);
  });

  function handleSearchInput(e) {
    let newSearch = {...search}
    newSearch = e.target.value;
    setSearch(newSearch);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  console.log(searchedPosts);

  return (
    <main>
      <Header title={title} />
      <form onSubmit={handleSubmit}>
      <div>
        <h2>Search through posts</h2>
        <input
          placeholder="search"
          type="text"
          value={search}
          onChange={handleSearchInput}
        />
        </div>
        <button type="submit">Submit</button>
      </form>
      {searchedPosts.length ? (
        <div>
          <LargeGrid articles={searchedPosts} />
          <section>
            <PostsGrid articles={searchedPosts} />
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
