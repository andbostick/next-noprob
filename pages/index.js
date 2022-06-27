import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import groq from "groq";
import LargeGrid from "../components/LargeGrid";
import PostsGrid from "../components/PostsGrid";
import client from "../client";
import Footer from "../components/Footer";

export default function Home({ posts, title }) {
  const [search, setSearch] = useState("");
  const [searchPost, setSearchPost] = useState("");
  useEffect(() => {}, [search]);

  async function searchPosts() {
    const searched = await client.fetch(groq`
  *[_type == 'post' && title match "${search}*"]
  
  `);

    // console.log(searched);
    return searched;
  }
  let searchedThrough = "";
  const searchedPost = async () => {
    try {
      let res = await searchPosts();
      searchedThrough = res;
      setSearchPost(searchedThrough);
    } catch (err) {
      console.log(err);
    }
  };


  function handleSearchInput(e) {
    let newSearch = { ...search };
    newSearch = e.target.value;
    setSearch(newSearch);
  }
  function handleSubmit(e) {
    e.preventDefault();
    searchedPost();
    // console.log(stuff);
  }

 

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
