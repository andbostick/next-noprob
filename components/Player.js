import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

export default function Player({ ytURL }) {
  const [isDesktop, setIsDesktop] = useState(false);

  const updateMedia = () => {
    if (window.innerWidth > 780) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 780) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <div>
      <ReactPlayer
        url={ytURL}
        playing={false}
        width={"100%"}
        height={isDesktop ? 500 : "100%"}
        config={{
          playerVars: {
            autoplay: 1,
            controls: 1,
          },
        }}
      />
      
    </div>
  );
}
