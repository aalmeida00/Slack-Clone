import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqaooI8XOHKVnaUTuFS18UkayMpx0fu3k",
    authDomain: "slack-clone-b8769.firebaseapp.com",
    databaseURL: "https://slack-clone-b8769.firebaseio.com",
    projectId: "slack-clone-b8769",
    storageBucket: "slack-clone-b8769.appspot.com",
    messagingSenderId: "1042181994655",
    appId: "1:1042181994655:web:d17a116cb28bd9bd2e0aaa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;