import { PortableText } from "@portabletext/react";

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

export default function Header({ title }) {
  const headerTitle = title[0].name;
  const headerDesc = title[0].mainDesc;
  const cardDesc = title[0].secDesc;

  return (
    <div className="container">
      <main className="main">
        <div className="text-box">
          <h1 className="title">{headerTitle}</h1>

          <div className="body-render description">
            <PortableText value={headerDesc} components={ptComponents} />
          </div>
        </div>
        <div className="circle"></div>
        <div className="card">
          <div className="body-render ">
            <PortableText value={cardDesc} components={ptComponents} />
          </div>
        </div>
      </main>

      <footer className="footer"></footer>
      <style jsx>{`
        .circle {
          border-radius: 50%;
          height: 200px;
          width: 200px;
          background-color: white;
          margin: 10%;
        }

        .container {
          padding: 0 2rem;
        }

        .main {
          min-height: 100vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footer {
          display: flex;
          flex: 1;
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
          justify-content: center;
          align-items: center;
        }

        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          color: #d47a69;
          font-family: "Amaranth", sans-serif;
        }

        .description {
          margin: 4rem 0;
          line-height: 1.5;
          font-size: 1.2rem;
          font-family: "Montserrat", sans-serif;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          background-color: #2e2a2a;
          text-align: left;
          color: inherit;
          text-decoration: none;
          text-align: center;
          border-radius: 10px;
          font-family: "Montserrat", sans-serif;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        @media (min-width: 768px) {
          .main {
            min-height: 100vh;
            padding: 4rem 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .circle {
            justify-self: center;
          }

          .text-box {
            flex: 1;
            flex-wrap: wrap;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .card {
            margin: 1rem;
            grid-column-end: span 2;
            padding: 1.5rem;
            background-color: #2e2a2a;
            color: inherit;
            text-align: center;
            border-radius: 10px;
          }
        }
      `}</style>
    </div>
  );
}
