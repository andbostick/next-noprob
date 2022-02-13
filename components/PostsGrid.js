import NextImage from "./Image";

export default function PostsGrid({ articles }) {
  articles.map((article) => {
    console.log(article.attributes);
  });
  return (
    <>
      {articles.map((article) => {
        return (
          <main key={article?.attributes.title}>
            <section>
              <NextImage image={article?.attributes.image} />

              <div>
                <h2>{article?.attributes.title}</h2>
                <p>{article?.attributes.description}</p>
              </div>
            </section>
          </main>
        );
      })}

      <style jsx>{`
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
        }
      `}</style>
    </>
  );
}
