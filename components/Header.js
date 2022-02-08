export default function Header() {
  return (
    <div className="container">
      <main className="main">
        <div className="text-box">
          <h1 className="title">No Problems Fitness</h1>

          <p className="description">
            learn innovative new workouts, tips and advice on workouts at home,
            things you can use at home for equipment, as well as workouts with
            the family and for the busy parent like myself! Live life as if you
            have no problems!
          </p>
        </div>
        <div className="circle"></div>
        <div className="card">
          <p>
            No Problems Fitness does not mean that you do not have any problems.
          </p>
          <p>
            No Problems Fitness means that you focus on your workout, leaving
            your problems on the floor at the door.
          </p>
          <p>
            The mission is to spread motivation to those that already workout as
            well as motivation and encouragement to those who are trying to get
            into fitness.
          </p>
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
          font-family: 'Amaranth', sans-serif;
        }

        .description {
          margin: 4rem 0;
          line-height: 1.5;
          font-size: 1.2rem;
          font-family: 'Montserrat', sans-serif;
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
          font-family: 'Montserrat', sans-serif;
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
