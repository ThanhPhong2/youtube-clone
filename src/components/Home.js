import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Listbar from "./Listbar";
// import SearchResult from "./Searchresult";
import { fetchVideos } from './Ytbapi';

const Home = () => {
  const [showVideoList, setShowVideoList] = useState(true);
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    setShowVideoList(false);
    setQuery(searchQuery);
    const results = await fetchVideos(searchQuery);
    setVideos(results);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <Listbar showVideoList={showVideoList} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Home;
