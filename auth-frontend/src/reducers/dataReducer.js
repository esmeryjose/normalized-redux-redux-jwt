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
      localStorage.setItem("jwt", action.payload.jwt);
      return {
        ...state,
        username: action.payload.username,
        user_id: action.payload.user_id,
        loggedIn: true,
        loading: false
      };
    case "LOG_OUT_USER":
      localStorage.removeItem("jwt");
      return { ...state, username: null, loggedIn: false };

    //accepts user, post, comment endpoints
    case "SET_DATA":
      let normalizedData = dataNormalizr(action.payload);
      console.log(state, normalizedData);
      return {
        ...state,
        entities: {
          users: { ...state.entities.users, ...normalizedData.entities.users },
          posts: { ...state.entities.posts, ...normalizedData.entities.posts },
          comments: {
            ...state.entities.comments,
            ...normalizedData.entities.comments
          }
        },
        result: {
          users: [...state.result.users, ...normalizedData.result.users],
          comments: [
            ...state.result.comments,
            ...normalizedData.result.comments
          ],
          posts: [...state.result.posts, ...normalizedData.result.posts]
        }
      };
    default:
      return state;
  }
}
