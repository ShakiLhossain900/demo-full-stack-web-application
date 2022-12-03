import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyCBAlXOUCRNGfjnMBEMsdZ2KCAXIa-yT24",
  authDomain: "food-ordering-e8c26.firebaseapp.com",
  projectId: "food-ordering-e8c26",
  storageBucket: "food-ordering-e8c26.appspot.com",
  messagingSenderId: "658597945464",
  appId: "1:658597945464:web:9d67e2fee86c0c505a0d8d"
};

export const app = initializeApp(firebaseConfig);
