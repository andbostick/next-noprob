import ReactPlayer from "react-player/youtube";

export default function Player(props) {
    const videoURL ="https://www.youtube.com/watch?v=" + props.videoId
    return (
        <div>
            <ReactPlayer
            url={videoURL}
            playing={false}
                onEnded={props.onEnd}
                width={'100%'}
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