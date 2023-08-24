// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";



const firebaseConfig = {

    apiKey: "AIzaSyC4Y4wa3jMR3WjYAKRNsgo87hLR3uP0FDg",
    authDomain: "reactnative-15171.firebaseapp.com",
    projectId: "reactnative-15171",
    storageBucket: "reactnative-15171.appspot.com",
    messagingSenderId: "533199483503",
    appId: "1:533199483503:web:6d84c39cdce941d7a7d39a"


};




const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
