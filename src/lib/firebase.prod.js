import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: 'AIzaSyAjcZgUyayq9C6fDPDYPlXvtfiSYID6pNY',
  authDomain: 'webflix-827b1.firebaseapp.com',
  projectId: 'webflix-827b1',
  storageBucket: 'webflix-827b1.appspot.com',
  messagingSenderId: '362556403739',
  appId: '1:362556403739:web:3673bfbf197ca7017488be',
};

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export { firebase };
