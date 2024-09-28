// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDJzFkv8rItiJeLl_iQbqXh-N_blqkb62o",
//   authDomain: "netflix-dd421.firebaseapp.com",
//   projectId: "netflix-dd421",
//   storageBucket: "netflix-dd421.appspot.com",
//   messagingSenderId: "472562534865",
//   appId: "1:472562534865:web:3f7a57f7967d94748bb8f0",
//   measurementId: "G-FZF5XLDX2D"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1G_F8SmueiR9oIuiqa8hfNHlYyAR2RX0",
  authDomain: "netflixgpt-2232e.firebaseapp.com",
  projectId: "netflixgpt-2232e",
  storageBucket: "netflixgpt-2232e.appspot.com",
  messagingSenderId: "381470346519",
  appId: "1:381470346519:web:8e1670ffd40f5515dd3b52",
  measurementId: "G-JW24CT8XNG"
};

 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();