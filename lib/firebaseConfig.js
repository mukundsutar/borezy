import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAPzIHVNdcVjjnAlyEjuf0FypoetZwx6-M",
  authDomain: "rental-system-e1bd3.firebaseapp.com",
  projectId: "rental-system-e1bd3",
  storageBucket: "rental-system-e1bd3.appspot.com",
  messagingSenderId: "190167032199",
  appId: "1:190167032199:web:196624f28799f20ea97322",
  measurementId: "G-EDZLWPLV7K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
