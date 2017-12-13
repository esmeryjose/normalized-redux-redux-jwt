import { dataNormalizr } from "../normalizr/normalizr";

export default function dataReducer(
  state = {
    username: null,
    user_id: null,
    loggedIn: false,
    loading: true,
    entities: { users: {}, posts: {}, comments: {} },
    result: { users: [], posts: [], comments: [] }
  },
  action
) {
  switch (action.type) {
    case "LOADING_USER":
      return { ...state, loading: true };
    case "LOGIN_USER":
      return {
        ...state,
        username: action.payload.username,
        user_id: action.payload.user_id,
        loggedIn: true,
        loading: false
      };
    case "LOG_OUT_USER":
      return { ...state, username: null, loggedIn: false };

    //accepts user, post, comment endpoints
    case "SET_DATA":
      let normalizedData = dataNormalizr(action.payload);
      console.log(state, normalizedData);
      debugger;
      return {
        ...state,
        entities: normalizedData.entities
      };
    default:
      return state;
  }
}
