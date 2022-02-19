import client from '../client'
import ImageUrlBuilder from "@sanity/image-url";

const builder = ImageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}


export default function LargePost({articles}) {
     const recentPost = articles[0];
    
    return (
        <main>
            <section className="large-post">
            {recentPost.mainImage && (
                <div className="image-box">
                  <img
                    src={urlFor(recentPost?.mainImage?.asset?._ref)
                      
                      .auto("format")
                      .fit("scale")
                      .url()}
                    alt="baner image"
                  />
                </div>
              )}
  
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

            img{
                width:100%;
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
                    grid-template-columns: 50% 1fr;
                    
                  }
                  .image{
                      height: 100%;
                  }
                  
              }
            `}</style>
        </main>
    )
}