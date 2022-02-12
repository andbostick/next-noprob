import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import LargeGrid from "../components/LargeGrid";
import PostsGrid from "../components/PostsGrid";
import { fetchAPI } from "../lib/api";

export default function Home({ categories, articles, homepage }) {
  console.log(categories)
  return (
    <main>
      <Header />
      <LargeGrid articles={articles} />
      <section>
        <PostsGrid articles={articles}/>
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
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}
