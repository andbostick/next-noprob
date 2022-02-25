import Link from "next/link";
import groq from "groq";
import ImageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { PortableText } from "@portabletext/react";
import Player from "../../components/Player";

const builder = ImageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      );
    },
  },
};

const Post = ({ post }) => {
  const {
    title = "no title",
    name = "no name",
    mainImage,
    body = [],
    publishedAt = "",
    ytURL,
  } = post;
  console.log(post);
  return (
    <article className="container">
      <div className="text-box">
        <Link href="/">
          <a>
            <h4 className="return"> Back Home</h4>
          </a>
        </Link>
        <h1>{title}</h1>
        <h2>By : {name}</h2>
        <h2>{new Date(publishedAt).toDateString()}</h2>
      </div>

      <div>
        
        {ytURL ? (
          <div className="player">
            <Player ytURL={ytURL} />
          </div>
        ) : (
          <div className="image-box">
            <img
              src={urlFor(mainImage?.asset).auto("format").fit("scale").url()}
              alt="baner image"
            />
          </div>
        )}
      </div>

      <div className="body-render">
        <PortableText value={body} components={ptComponents} />
      </div>
      <style jsx>{`
        .text-box {
          display: flex;
          flex-direction: column;
          padding: 12px;
          font-family: "Montserrat", sans-serif;
          font-size: 1.5rem;
          text-align: center;
        }
        .return {
          margin: 0;
          text-align: left;
          font-size: 1rem;
        }
        h1 {
          font-size: 1.75rem;
        }
        h2 {
          margin: 0.5em;
          font-size: 1.25rem;
        }
        img {
          width: 100%;
        }
        .body-render {
          width: 75%;
          margin: 0 auto;
          font-family: "Montserrat", sans-serif;
        }
        @media screen and (min-width: 1280px) {
          .player {
            margin: auto;
          }
          article {
            width: 75%;
            margin: 0 auto;
          }
          .body-render {
            width: 100%;
          }
          h1 {
            margin: 0;
            font-size: 2.5rem;
          }
          h2 {
            margin: 0.5em;
            font-size: 2rem;
          }
        }
      `}</style>
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    'name': author->name,
    mainImage,
    publishedAt,
    body,
    ytURL
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}

export default Post;
