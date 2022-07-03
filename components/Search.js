import { useEffect } from "react";
import client from "../client";
import groq from "groq";

export default function Search({
  setReset,
  reset,
  setSearch,
  search,
  setSearchPost,
  searchPost,
}) {
  async function searchPosts() {
    const searched = await client.fetch(groq`
    *[_type == 'post' && title match "${search}*"]
    
    `);

    console.log(searched);
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
    setReset(true);
    // console.log(stuff);
  }

  function clearAll() {
    setReset(false);
    setSearch("");
    setSearchPost("");
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Search through posts</h2>
          <input
            placeholder="Search by title, ex: pushups"
            type="text"
            value={search}
            onChange={handleSearchInput}
          />
        </div>
        <button type="submit">Submit</button>
        {reset ? <button onClick={clearAll}>Reset</button> : ""}
      </form>

      <style jsx>
        {`
          input[type="text"] {
              
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            border-radius: 4px;
            background-color: #2e2a2a;
            color: white;
          }
          input[type="text"]:focus{
            outline: none;
            border: 3px solid #d47a69;
          }
          section {
            margin: 0 10px 50px 10px;
            font-family: "Amaranth", sans-serif;
            display: grid;
          }
          button{
            background-color: #d47a69;
            border: none;
            color: white;
            padding: 16px 32px;
            text-decoration: none;
            margin: 4px 2px;
            cursor: pointer;
            transition:  .2s ease-in;
            width: 180px;
          }
          button:hover{
              background-color: #2e2a2a;
          }
          @media (min-width: 1280px){
            section {
                margin: 0 0 50px 10px;
                font-family: "Amaranth", sans-serif;
                display: grid;
              }
              input[type="text"] {
              
                width: 26%;
              }
          }
        `}
      </style>
    </section>
  );
}
