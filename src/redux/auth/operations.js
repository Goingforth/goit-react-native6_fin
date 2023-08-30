import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,

} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { authStateChange } from './authSlice';


// або більш короткий запис цієї функції

// регистрация user с помощью email и password
export const registerDB = ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password);

//    

// export const authStateChanged = async (onChange = () => { }) => {
//     onAuthStateChanged((user) => {
//         onChange(user);
//     });
// };

// логин user с помощью email и password

export const loginDB = async ({ email, password }) => {
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        return credentials.user;
    } catch (error) {
        throw error;
    }
};

// update user профиля

export const updateUserProfile = async (update) => {

    const user = auth.currentUser;

    // якщо такий користувач знайдений
    if (user) {

        // оновлюємо його профайл
        try {
            await updateProfile(user, update);
        } catch (error) {
            throw error
        }
    }
};

// export const authStateChangeUser = () => async (dispatch, state) => {
//     onAuthStateChanged(auth, user => {
//         if (user) {
//             const userProfile = {
//                 userId: user.uid,
//                 login: user.displayName,
//                 email: user.email,
//                 avatar: user.photoURL,
//             };

//             dispatch(authStateChange({ stateChange: true }));
//             dispatch(updateUserProfile(userProfile));
//         }
//     });
// };
export const authStateChangeUser = () => async (dispatch, getState) => {
    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(
                    updateUserProfile({
                        userId: user.uid,
                        login: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                    })
                );
                dispatch(authStateChange({ stateChange: true }));
                console.log(stateChange);
                // dispatch(onAuthStateChanged({ stateChange: true }));
            }
        });
    } catch (error) {
        console.log('error: ', error, error.message);
    }
};