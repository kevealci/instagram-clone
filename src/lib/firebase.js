import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
/* import { seedDatabase } from '../seed'; */

const config = {
  apiKey: 'AIzaSyAcJzOoEX_kety8dkSwTI0HHZ2AwpnRZxo',
  authDomain: 'instagram-clone-7057b.firebaseapp.com',
  projectId: 'instagram-clone-7057b',
  storageBucket: 'instagram-clone-7057b.appspot.com',
  messagingSenderId: '942306765196',
  appId: '1:942306765196:web:7b25726254a12e81c60ea9'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
/* seedDatabase(firebase); */

export { firebase, FieldValue };
