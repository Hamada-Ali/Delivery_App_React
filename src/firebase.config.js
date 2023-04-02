// this files we must import it
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


// configration from firebase console
const firebaseConfig = {
    apiKey: "AIzaSyAyrd87mMUMOK74MSk_ydIEP07aMFgGvEs",
    authDomain: "restaurant-app-f6f44.firebaseapp.com",
    databaseURL: "https://restaurant-app-f6f44-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "restaurant-app-f6f44",
    storageBucket: "restaurant-app-f6f44.appspot.com",
    messagingSenderId: "945955874659",
    appId: "1:945955874659:web:61cbc020f5c35543bc1556"
  };


  // some logic to check if the app exist or not
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  // get firestore for this app if exist
  const fireStore = getFirestore(app)

  // ...... get storage
  const storage = getStorage(app)

  // export variables
  export { app, fireStore, storage }