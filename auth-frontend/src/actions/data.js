import { AuthAdapter, RestfulAdapter } from "../adapter";

export function signInUser(username, password) {
  return dispatch => {
    dispatch(loadingUser());
    AuthAdapter.login({ username, password }).then(userData => {
      localStorage.setItem("jwt", userData.jwt);
      dispatch(setCurrentUser(userData));
      dispatch(setData(userData));
    });
  };
}

export function signUpUser(username, password) {
  return dispatch => {
    dispatch(loadingUser());
    AuthAdapter.signUp({ username, password }).then(userData => {
      localStorage.setItem("jwt", userData.jwt);
      dispatch(setCurrentUser(userData));
      dispatch(setData(userData));
    });
  };
}

//uses header JWT token:
export function getCurrentUser() {
  return dispatch => {
    dispatch(loadingUser());
    AuthAdapter.getUser().then(userData => {
      localStorage.setItem("jwt", userData.jwt);
      dispatch(setCurrentUser(userData));
      dispatch(setData(userData));
    });
  };
}

export function setCurrentUser(userData) {
  return {
    type: "LOGIN_USER",
    payload: userData
  };
}

export function logOutUser() {
  localStorage.removeItem("jwt");
  return {
    type: "LOG_OUT_USER"
  };
}

export function loadingUser() {
  return {
    type: "LOADING_USER"
  };
}

export function getUserData() {
  return dispatch => {
    RestfulAdapter.indexFetch("users").then(data => dispatch(setData(data)));
  };
}

export function getPostData() {
  return dispatch => {
    RestfulAdapter.indexFetch("posts").then(data => dispatch(setData(data)));
  };
}

export function getCommentData() {
  return dispatch => {
    RestfulAdapter.indexFetch("comments").then(data => dispatch(setData(data)));
  };
}

export function addPost(body) {
  return dispatch => {
    RestfulAdapter.createFetch("posts", body).then(data =>
      dispatch(setData(data))
    );
  };
}

export function addComment(body) {
  return dispatch => {
    RestfulAdapter.createFetch("comments", body).then(data =>
      dispatch(setData(data))
    );
  };
}

export function setData(data) {
  debugger;

  return {
    type: "SET_DATA",
    payload: data
  };
}

// fetch("http://localhost:3000/api/v1/signup", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json"
//   },
//   body: JSON.stringify({
//     user: {
//       username: username,
//       password: password
//     }
//   })
// })
//   .then(response => response.json())
// fetch("http://localhost:3000/api/v1/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json"
//   },
//   body: JSON.stringify({
//     user: {
//       username,
//       password
//     }
//   })
// })
//   .then(response => response.json())

// return dispatch => {
//   dispatch(loadingUser());
//   fetch("http://localhost:3000/api/v1/current_user", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${localStorage.getItem("jwt")}`
//     }
//   })
//     .then(response => response.json())
// fetch("http://localhost:3000/api/v1/posts", {
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: `Bearer ${localStorage.getItem("jwt")}`
//   }
// })
//   .then(response => response.json())
//   fetch("http://localhost:3000/api/v1/posts", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${localStorage.getItem("jwt")}`
//     }
//   })
//     .then(response => response.json())

// fetch("http://localhost:3000/api/v1/comments", {
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: `Bearer ${localStorage.getItem("jwt")}`
//   }
// })
//   .then(response => response.json())
