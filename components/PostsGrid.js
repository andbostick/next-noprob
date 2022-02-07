export default function PostsGrid() {
    return (
        <main>
            <section>
                <div className="image"></div>
                <div>
            <h2>Title</h2>
                    <p>Short Description</p>
                    </div>
            </section>
            <style jsx>{`
            main{
                padding: 0 2rem;
            }
            section{
                margin: 2rem 0;
                padding: 2rem 0;
                display: grid;
                grid-template-columns: 30% 1fr;
                gap: 15px;
                border-bottom: solid grey 1px;
            }
            
            .image{
                
                background-color: white;
            }
            `}</style>
        </main>
    )
}