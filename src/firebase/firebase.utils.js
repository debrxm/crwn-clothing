import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAdsqcr6cmf2rTwfwGj7Iqp9fitexhew-0',
  authDomain: 'crwn-clothing-e7753.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-e7753.firebaseio.com',
  projectId: 'crwn-clothing-e7753',
  storageBucket: '',
  messagingSenderId: '437956065968',
  appId: '1:437956065968:web:8caf9b1046642af6'
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
