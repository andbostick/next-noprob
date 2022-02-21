import client from "../client";
import ImageUrlBuilder from "@sanity/image-url";

const builder = ImageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function LargePost({ articles }) {
  const recentPost = articles[2];

  return (
    <main>
      <section className="large-post">
        {recentPost.mainImage && (
          <img
            src={urlFor(recentPost?.mainImage?.asset?._ref)
              .auto("format")
              .fit("max")
              .url()}
            alt="baner image"
          />
        )}

        <div className="text-box">
          <h2>{recentPost?.title}</h2>
          <p>{recentPost?.description}</p>
        </div>
      </section>

      <style jsx>{`
        .large-post {
          background-color: #2e2a2a;
          width: 100%;
        }

        img {
          width: 100%;
        }

        h2 {
          color: #d47a69;
        }

        .text-box {
          padding: 2rem;
          font-size: 12px;
        }
        img {
            height:100%;
          }

        
        @media (min-width: 1280px) {
          main {
            margin: 0 0 50px 0;
            font-family: "Amaranth", sans-serif;
          }
          h2 {
            font-size: 2rem;
          }
          section {
            display: grid;
            grid-template-columns: 40% 1fr;
          }
          img {
            height: 100%;
          }
        }
      `}</style>
    </main>
  );
}
