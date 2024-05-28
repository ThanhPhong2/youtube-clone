import React from "react";
import "./styles/Searchresult.css";

const SearchResult = ({ result }) => {
  if (!result || !result.snippet) {
    return null;
  }
  const { snippet, channelAvatar, channelTitle } = result;
  const { thumbnails, title, description } = snippet;

  return (
    <div className="search-list">
      <div className="search-results-container">
        <div className="search-result">
          <div className="thumbnail">
            <img src={thumbnails.medium.url} alt={title} style={{ width: "400px", height: "auto", borderRadius: "10px" }} />
          </div>
          <div className="info1" style={{ width: '500px' }}>
            <h3 className="title">{title}</h3>
            <div className="avaname">
              <div className="channel-avatar">
                <img src={channelAvatar} alt={channelTitle} />
              </div>
              <p className="channel-name1">{channelTitle}</p>
              <p>889 N lượt xem . 2 tuần trước</p>
            </div>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
