import React from "react";
import "./styles/Listbar.css";
import VideoList from './Videolist';
import SearchResult from "./Searchresult";

const Listbar = ({ showVideoList, videos }) => {
  return (
    <div className="List">
      <div className="scrollbar-container">
        <button className="item">Tất cả</button>
        <button className="item">Âm nhạc</button>
        <button className="item">Trò chơi</button>
        <button className="item">Tin tức</button>
        <button className="item">Danh sách kết hợp</button>
        <button className="item">Trực tiếp</button>
        <button className="item">Bóng rổ</button>
        <button className="item">Bóng đá</button>
        <button className="item">Nấu ăn</button>
        <button className="item">Bóng đá</button>
      </div>
      {showVideoList ? <VideoList /> : (
        <div className="search-results">
          {videos.map((video) => (
            <SearchResult key={video.id.videoId} result={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Listbar;
