import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          (
            { url, likes, shares, messages, channel, description, song },
            index
          ) => (
            <Video
              url={url}
              likes={likes}
              shares={shares}
              messages={messages}
              channel={channel}
              description={description}
              song={song}
              key={index}
            />
          )
        )}
        {/* <Video
          url="./lushlife1.mp4"
          likes={4}
          shares={4}
          messages={5}
          channel="kitchu"
          description="Pop Songs(Popular) "
          song="zara larrson-lush life"
        />
        <Video
          url="./stressedout.mp4"
          likes={4}
          shares={4}
          messages={5}
          channel="kitchu"
          description="Songs(Popular) "
          song="Stressed out"
        />
        <Video
          url="./tiktokgirl.mp4"
          likes={4}
          shares={4}
          messages={5}
          channel="kitchu"
          description="Advice(Popular) "
          song="Onlyjayus"
        />
        <Video
          url="./tiktokgirl.mp4"
          likes={4}
          shares={4}
          messages={5}
          channel="kitchu"
          description="Advice(Popular) "
          song="Onlyjayus"
        /> */}
      </div>
    </div>
  );
}

export default App;
