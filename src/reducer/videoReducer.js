const initialState = {
    videos: [],
    popularVideos: [],
    loading: false,
    error: null,
  };
  
  const videoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_VIDEOS_REQUEST':
      case 'FETCH_POPULAR_VIDEOS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_VIDEOS_SUCCESS':
        return {
          ...state,
          loading: false,
          videos: action.payload,
        };
      case 'FETCH_POPULAR_VIDEOS_SUCCESS':
        return {
          ...state,
          loading: false,
          popularVideos: action.payload,
        };
      case 'FETCH_VIDEOS_FAILURE':
      case 'FETCH_POPULAR_VIDEOS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default videoReducer;
  