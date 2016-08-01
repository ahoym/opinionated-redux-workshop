import { FETCH_CREATOR_POST_FEED_START, FETCH_CREATOR_POST_FEED_SUCCESS } from 'actions/creator-post-feed'

const initialState = {} // ??? fix me
export const postFeed = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREATOR_POST_FEED_START:
      return state;

    case FETCH_CREATOR_POST_FEED_SUCCESS:
      return { entities: action.data };

    default:
      return state;
  }
}
