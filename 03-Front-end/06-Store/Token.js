const initialState = {
  token: ""
};
const token = sessionStorage.user
  ? JSON.parse(sessionStorage.user)
  : initialState;

sessionStorage.user = JSON.stringify(token);

export default token;
