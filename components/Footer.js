
export default function Footer() {
    return (
        <main>
            <section>
                <h2>No Problems Fitness</h2>
                <p>Live life as if you have no problems!</p>
            </section>
            <section>
            <p>Follow</p>
                <ul>
                    <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UClJz_DlABhs9MDdRlBhYh8g">YouTube</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/NoProblemsFitness/">Instagram</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/NoProblemsFitness/">Facebook</a></li>
                </ul>
            </section>
            <section>
            <p><a href='https://noproblems.sanity.studio/studio/desk'>Admin</a></p>
            </section>
            <style jsx>{`
                main{
                    margin-top: 50px;
                    display: flex;
                    justify-content: space-around;
                    
                }
                li{
                    list-style-type: none;
                    padding: 5px;
                }
                @media (min-width: 1280px) {
                    main{
                        border-top: solid grey 1px;
                        padding: 20px;
                    }
                }
            `}</style>
            </main>
    )
}