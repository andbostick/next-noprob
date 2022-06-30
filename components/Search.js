import { useEffect } from "react";
import client from "../client";
import groq from "groq";

export default function Search({setReset, reset, setSearch, search,setSearchPost,searchPost}) {
  useEffect(() => {}, [search]);

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
    <div>
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
      {reset ? <button onClick={clearAll}>reset</button> : ""}
    </div>
  );
}
