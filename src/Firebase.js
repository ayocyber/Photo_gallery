// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import  {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr3MTsSyhexj9dYtLQUaY7cqtUQERpK_M",
  authDomain: "image-gallery-d1207.firebaseapp.com",
  projectId: "image-gallery-d1207",
  storageBucket: "image-gallery-d1207.appspot.com",
  messagingSenderId: "867007088621",
  appId: "1:867007088621:web:414d50030d1b6cd3c489e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)