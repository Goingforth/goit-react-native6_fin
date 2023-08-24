const selectUserId = state => state.auth.userId;
const selectLogin = state => state.auth.login;
const selectEmail = state => state.auth.email;
const selectAvatar = state => state.auth.imageUser;
const selectStateChange = state => state.auth.stateChange;
const selectAuthState = (state) => state.auth;

export { selectUserId, selectLogin, selectEmail, selectAvatar, selectStateChange, selectAuthState };