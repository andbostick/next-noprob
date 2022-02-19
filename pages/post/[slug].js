import groq from "groq";
import ImageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { PortableText } from "@portabletext/react";

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
  const { title='no title', name = "no name", mainImage, body = [], publishedAt = ''} = post;
  console.log(post);
  return (
    <article className="container">
          <div className="text-box">
              {title && (<h1>{title}</h1>)}
        

        <h2>{name}</h2>
        {new Date(publishedAt).toDateString()}
      </div>
      {mainImage && (
        <div className="image-box">
          <img
            src={urlFor(mainImage?.asset)
              
              .auto("format")
              .fit("scale")
              .url()}
            alt="baner image"
          />
        </div>
      )}

      <div className="body-render">
        <PortableText value={body} components={ptComponents} />
      </div>
      <style jsx>{`
        article {
        }
        .text-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 64px;
          font-family: "Amaranth", sans-serif;
          font-size: 2rem;
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
          article {
            width: 75%;
            margin: 0 auto;
          }
          .body-render {
            width: 100%;
          }
        }
      `}</style>
    </article>
  );
};

export default Post;

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    'name': author->name,
    'categories': categories[]->title,
    mainImage,
    publishedAt,
    body
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
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
