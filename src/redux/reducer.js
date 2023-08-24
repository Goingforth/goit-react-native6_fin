import { authReducer } from "./auth/reducer";
import { postsReducer } from "./posts/reducer";
import { combineReducers } from "redux";

// export const rootReducer = (state = {}, action) => {
//     // Возвращаем объект состояния
//     return {
//         // Обоим редюсерам передаем только часть состояния за которую они отвечают
//         auth: authReducer(state.auth, action),
//         postsReducer: postsReducer(state.posts, action),
//     };
// };

export const rootReducer = combineReducers({
    auth: authReducer,
    postsReducer: postsReducer,
});