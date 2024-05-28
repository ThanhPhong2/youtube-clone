const initialState = {
    searchResults: [],
    loading: false,
    error: null,
  };
  
  const searchResultReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SEARCH_RESULTS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_SEARCH_RESULTS_SUCCESS':
        return {
          ...state,
          loading: false,
          searchResults: action.payload,
        };
      case 'FETCH_SEARCH_RESULTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchResultReducer;
  