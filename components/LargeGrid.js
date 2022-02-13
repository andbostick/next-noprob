import NextImage from './Image';

export default function LargePost({articles}) {
     const recentPost = articles[articles?.length - 1].attributes;
    
    return (
        <main>
            <section className="large-post">
            <NextImage image={recentPost?.image}/>
                <div className="text-box">
                    <h2>{recentPost?.title}</h2>
                    <p>{recentPost?.description}</p>
                </div>
            </section>
            
            <style jsx>{`
            .large-post{
                background-color: #2E2A2A;
                width: 100%;
            }
            
            h2{
                color: #D47A69;
            }

            .text-box{
                padding: 2rem;
                font-size: 12px;
            }
            @media(min-width:1280px){
                main {
                  margin: 0 0 50px 0;
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