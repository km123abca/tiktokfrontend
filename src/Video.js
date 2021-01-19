import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video(props) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        onClick={handleVideoPress}
        loop
        ref={videoRef}
        src={props.url}
      ></video>
      <VideoFooter
        channel={props.channel}
        description={props.description}
        song={props.song}
      />
      <VideoSidebar
        likes={props.likes}
        shares={props.shares}
        messages={props.messages}
      />
    </div>
  );
}

export default Video;
