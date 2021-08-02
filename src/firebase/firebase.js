import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCPdHKVBOCLVWqUqM52xudmijRSCv0btkk",
  authDomain: "marvelstation-19896.firebaseapp.com",
  projectId: "marvelstation-19896",
  storageBucket: "marvelstation-19896.appspot.com",
  messagingSenderId: "258741944941",
  appId: "1:258741944941:web:1008506fe3a73762a0f564",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
