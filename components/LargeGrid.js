
export default function LargePost() {
    return (
        <main>
            <section className="large-post">
                <div className="image"></div>
                <div className="text-box">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper felis sed quam tempus, eget aliquet est viverra. Quisque aliquet quam at tellus dictum, eget euismod sem pulvinar. </h2>
                </div>
            </section>

            <style jsx>{`
            .large-post{
                background-color:blue;
                
                width: 100%;
            }
            .image{
                background-color: grey;
                height: 200px;
            }
            .text-box{
                padding: 2rem;
                font-size: 12px;
            }
            @media(min-width:1280px){
                main {
                  margin: 0 100px 50px 100px;
                  font-family: 'Amaranth', sans-serif;
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