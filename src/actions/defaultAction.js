import axios from 'axios';

const API_KEY = 'AIzaSyAiUHCemZlXqK-q4HOULfiGBPQ129oG7dU';
const POPULAR_VIDEOS_URL = 'https://youtube.googleapis.com/youtube/v3/videos';

const fetchVideosAPI = async (query) => {const response = await axios.get('https://youtube.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: query,
      maxResults: 20,
      key: API_KEY,
    },
  });
  return response.data.items;
};

export const fetchVideos = (query) => async (dispatch) => {
  dispatch({ type: 'FETCH_VIDEOS_REQUEST' });

  try {
    const videos = await fetchVideosAPI(query);
    dispatch({ type: 'FETCH_VIDEOS_SUCCESS', payload: videos });
  } catch (error) {
    dispatch({
      type: 'FETCH_VIDEOS_FAILURE',
      payload: error.message,
    });
  }
};

export const fetchPopularVideos = () => async (dispatch) => {
  dispatch({ type: 'FETCH_POPULAR_VIDEOS_REQUEST' });

  try {
    const response = await axios.get(POPULAR_VIDEOS_URL, {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 20,
        regionCode: 'US',
        key: API_KEY,
      },
    });

    dispatch({
      type: 'FETCH_POPULAR_VIDEOS_SUCCESS',
      payload: response.data.items,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_POPULAR_VIDEOS_FAILURE',
      payload: error.message,
    });
  }
};
