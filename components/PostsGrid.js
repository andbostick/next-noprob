import client from '../client'
import Link from 'next/link'
import ImageUrlBuilder from "@sanity/image-url";

const builder = ImageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}


export default function PostsGrid({ articles }) {
 
  
  
  return (
    <>
      {articles.slice(1).map((article) => {
        return (
          <main key={article?.title}>
            <section>
            

              <div className='container'>
                <Link href='/post/[slug]' as={`/post/${article?.slug?.current}`} passHref>
                  <a>
                  {article.mainImage && (
              <div className="image-box">
                <img
                  src={urlFor(article?.mainImage?.asset?._ref)
                    
                    .auto("format")
                    .fit("scale")
                    .url()}
                  alt="baner image"
                />
              </div>
            )}
                    <h2>{article?.title}</h2>
                  </a>
                  </Link>
              </div>
            </section>
          </main>
        );
      })}

      <style jsx>{`
      img{
        width:100%;
      }
        main {
          padding: 0 2rem;
          font-family: "Amaranth", sans-serif;
        }
        p {
          font-family: "Montserrat", sans-serif;
        }
        section {
          padding: 2rem 0;
          display: grid;
          grid-template-columns: 30% 1fr;
          gap: 15px;
          border-bottom: solid grey 1px;
        }

        h2 {
          color: #d47a69;
        }

        .image {
          background-color: white;
        }
        @media (min-width: 1280px) {
          main {
            padding: 0;
          }
          section {
            border-bottom: solid grey 0;
            display: flex;
            flex-direction: column;
            
          }
          .container:hover {
            text-decoration: underline;
          }
          .container:hover img
          {
            opacity: 0.2;
          }
        }
      `}</style>
    </>
  );
  
}

