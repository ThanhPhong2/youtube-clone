import axios from 'axios';

const API_KEY = 'AIzaSyAiUHCemZlXqK-q4HOULfiGBPQ129oG7dU';  
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const VIDEO_DETAILS_URL = 'https://www.googleapis.com/youtube/v3/videos';
const CHANNEL_DETAILS_URL = 'https://www.googleapis.com/youtube/v3/channels';

const fetchVideos = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      part: 'snippet',
      maxResults: 70,
      q: query,
      key: API_KEY, 
    },
  });

  const videoIds = response.data.items.map(item => item.id.videoId).join(',');

  const videoDetailsResponse = await axios.get(VIDEO_DETAILS_URL, {
    params: {
      part: 'contentDetails,statistics',
      id: videoIds,
      key: API_KEY,
    },
  });

  const channelIds = response.data.items.map(item => item.snippet.channelId).join(',');
  const channelDetailsResponse = await axios.get(CHANNEL_DETAILS_URL, {
    params: {
      part: 'snippet',
      id: channelIds,
      key: API_KEY,
    },
  });

  const videos = response.data.items.map(video => {
    const videoDetails = videoDetailsResponse.data.items.find(item => item.id === video.id.videoId);
    const channelDetails = channelDetailsResponse.data.items.find(item => item.id === video.snippet.channelId);

    return {
      ...video,
      ...videoDetails,
      channelThumbnail: channelDetails.snippet.thumbnails.default.url,
      channelTitle: channelDetails.snippet.title,
      channelDescription: channelDetails.snippet.description,
      channelAvatar: channelDetails.snippet.thumbnails.default.url,
    };
  });

  return videos;
};

export { fetchVideos };
