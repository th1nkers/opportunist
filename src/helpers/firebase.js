import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';

// import {
//     apiKey,
//     authDomain,
//     databaseUrl,
//     projectId,
//     storageBucket,
//     messagingId,
//     appId,
// } from '../constants/firebase';

// const firebaseConfig = {
//     apiKey: apiKey,
//     authDomain: authDomain,
//     databaseURL: databaseUrl,
//     projectId: projectId,
//     storageBucket: storageBucket,
//     messagingSenderId: messagingId,
//     appId: appId
// };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-FF1jBRgzs_EDfuQhJxIQ0iKtK9ObuPI",
  authDomain: "opportunist-io.firebaseapp.com",
  databaseURL: "https://opportunist-io-default-rtdb.firebaseio.com",
  projectId: "opportunist-io",
  storageBucket: "opportunist-io.appspot.com",
  messagingSenderId: "381982985411",
  appId: "1:381982985411:web:8acde591d56000cfb72676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)