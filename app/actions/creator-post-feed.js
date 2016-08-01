import jsonApiUrl from 'utils/json-api-url'
import fetch from 'isomorphic-fetch'
import { camelizeKeys } from 'humps'

export const FETCH_CREATOR_POST_FEED_START = 'FETCH_CREATOR_POST_FEED_START'
export const FETCH_CREATOR_POST_FEED_SUCCESS = 'FETCH_CREATOR_POST_FEED_SUCCESS'


export const fetchCreatorPostFeedStart = () => {
  return {
    type: FETCH_CREATOR_POST_FEED_START
  };
};


export const fetchCreatorPostFeedSuccess = (data) => {
  console.log("TESTING LOG HERE", 'fetchCreatorPostFeedSuccess');
  return {
    type: FETCH_CREATOR_POST_FEED_SUCCESS,
    data
  }
};

const fetchCreatorPostFeedIncludes = ['user.null']
const fetchCreatorPostFeedFields = {
    'post': [
        'title',
        'content',
        'like_count',
        'image',
        'published_at',
        'current_user_has_liked'
    ],
    'user': [
        'image_url',
        'full_name'
    ]
}

export const fetchCreatorPostFeed = (creatorId) => {
    return (dispatch) => {
      const url = jsonApiUrl('/stream', {
          'include': fetchCreatorPostFeedIncludes,
          'fields': fetchCreatorPostFeedFields,
          'page': {
              'cursor': 'null'
          },
          'filter': {
              'is_by_creator': 'true',
              'is_following': 'false',
              'creator_id': creatorId
          }
      })

      fetch(url)
        .then((resp) => resp.json())
        .then((resp) => {
          const parsedResp = camelizeKeys(resp.data);

          dispatch(fetchCreatorPostFeedSuccess(parsedResp));
        });
    }
}
