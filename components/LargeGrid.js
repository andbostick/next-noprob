
export default function LargePost() {
    return (
        <main>
            <section className="large-post">
                <div className="image"></div>
                <div className="text-box">
                <h2>Title</h2>
                </div>
            </section>

            <style jsx>{`
            .large-post{
                background-color:blue;
                height: 250px;
                width: 100%;
            }
            .image{
                background-color: grey;
                height: 50%;
            }
            .text-box{
                padding: 2rem;
            }
            @media(min-width:1280px){
                main {
                  margin: 0 100px 50px 100px;

                }
                  section{
                    display:grid;
                    grid-template-columns: 30% 1fr;
                  }
                  .image{
                      height: 100%;
                  }
                  
              }
            `}</style>
        </main>
    )
}