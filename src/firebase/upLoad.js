import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase/app';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';

export const pickImage = async () => {
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            allowsMultipleSelection: false,
        });
        return result.canceled ? null : result.assets[0].uri;
    } catch (e) {
        throw e;
    }
}

export const uploadImage = async (uri, path) => {
    let URL;
    try {
        const response = await fetch(uri);
        const blob = await response.blob();
        const storageRef = firebase.storage().ref();
        const upload = storageRef.child(path);
        await upload.put(blob);
        await upload.getDownloadURL().then((url) => {
            URL = url;
        });
        return URL;
    } catch (e) {
        throw e;
    }
}

export const uploadImageAsinc = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", uri, true);
        xhr.send(null);
    });
    try {
        const storageRef = ref(storage, `images/image-${Date.now()}`);
        const result = await uploadBytes(storageRef, blob);
        blob.close();

        return await getDownloadURL(storageRef);
    }
    catch (error) {
        alert(`Error: ${error}`);

    }

}