import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDE0_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos()
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDE0_API);
    const json = await data.json();
    console.log(json.items)
    setVideos(json.items)
  }
  return (
    <div className="flex gap-[2%] p-3 flex-wrap">
      {videos.map((video, index) => (
        <Link key={index} to={"/watch?v=" + video.id}> <VideoCard info={video} /></Link>

      ))}
      {/* {videos[0] && <VideoCard info={videos[0]} />} */}
    </div>
  )
}

export default VideoContainer;
