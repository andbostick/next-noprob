export default function PostsGrid() {
    return (
        <main>
            <section>
                <div className="image"></div>
                <div>
            <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper felis sed quam tempus, eget aliquet est viverra.</p>
                    </div>
            </section>
            <style jsx>{`
            main{
                padding: 0 2rem;
                font-family: 'Amaranth', sans-serif;
            }
            p{
                font-family: 'Montserrat', sans-serif;
            }
            section{
                padding: 2rem 0;
                display: grid;
                grid-template-columns: 30% 1fr;
                gap: 15px;
                border-bottom: solid grey 1px;
            }
            
            .image{
                
                background-color: white;
            }
            @media(min-width:1280px){
                main{
                    padding: 0;
                    
                }
                section{
                    
                    border-bottom: solid grey 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                   
                }
                .image{
                    height: 200px;
                    width: 100%;
                    background-color: white;
                }

            }
            `}</style>
        </main>
    )
}