
import ReactPlayer from "react-player/youtube";

export default function Player({ ytURL }) {
 
  return (
    <div className="player-container">
      <ReactPlayer
        className="player"
        style={{ position: "absolute", top: 0, left: 0 }}
        url={ytURL}
        playing={false}
        width={"100%"}
        height={"100%"}
        config={{
          playerVars: {
            autoplay: 1,
            controls: 1,
          },
        }}
      />
      <style jsx>
        {`
          .player-container {
            position: relative;
            padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
          }
         
        `}
      </style>
    </div>
  );
}
