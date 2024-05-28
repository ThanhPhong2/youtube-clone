import "./styles/videoList.css";
import React, { useEffect, useState } from "react";

function VideoList() {
  const api = "AIzaSyAiUHCemZlXqK-q4HOULfiGBPQ129oG7dU";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const video_list = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${api}`;
      fetch(video_list)
        .then((response) => response.json())
        .then((data) => setData(data.items));
    };
    fetchData();
  }, []);
  const formatViewCount = (viewCount) => {
    if (viewCount < 1000) {
      return viewCount.toString();
    } else if (viewCount < 1000000) {
      return Math.floor(viewCount / 1000) + " N lượt xem";
    } else {
      return Math.floor(viewCount / 1000000) + " Tr lượt xem";
    }
  };
  const formatDate = (publishedAt) => {
    const publishedDate = new Date(publishedAt);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - publishedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} ngày trước`;
  };
  return (
    <div className="video-list">
      {data.map((video, index) => (
        <div className="grid-video" key={index}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            className="video-thumbnail"
          />
          <div className="video-details">
            <div className="avatar-channel">
              <img src={video.snippet.thumbnails.default.url} />
              <div className="video-title">{video.snippet.title}</div>
            </div>
            <div className="channel-name">{video.snippet.channelTitle}</div>
            <div className="video-info">
              <p>{formatDate(video.snippet.publishedAt)}</p>
              <div className="space">.</div>
              <p>{formatViewCount(parseInt(video.statistics.viewCount))}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
