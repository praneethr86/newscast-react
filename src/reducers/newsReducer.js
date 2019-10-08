import { FETCH_ARTICLES, FETCH_CONTENT } from '../actions/types';

const initialState = {
  articles: [],
  content: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    case FETCH_CONTENT:
      return {
        ...state,
        content: article.payload
      };
    default:
      return state;
  }
}
