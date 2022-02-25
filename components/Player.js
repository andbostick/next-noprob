import ReactPlayer from "react-player/youtube";

export default function Player({ytURL}) {
    
    return (
        <div>
            <ReactPlayer
            url={ytURL}
            playing={false}
                
                width={'100%'}
                height={500}
                config={{
                    playerVars: {
                        autoplay: 1,
                        controls: 1
                }
            }}
            />
        </div>
    )

}