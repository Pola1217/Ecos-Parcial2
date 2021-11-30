const firebaseConfig = {
    apiKey: "AIzaSyCkFBNyM6mLi6QrxuUzmK6wqtqyTR-8PbU",
    authDomain: "parcialecos-2.firebaseapp.com",
    projectId: "parcialecos-2",
    storageBucket: "parcialecos-2.appspot.com",
    messagingSenderId: "841111729743",
    appId: "1:841111729743:web:64c1ffae11d3288caf5c3a",
    measurementId: "G-7HZLE1PTGW"
  };

  export function getFirebaseConfig() {

    if(!firebaseConfig || !firebaseConfig.apiKey) {
        
        throw new Error("Firebase config error");
    }

    else {
        return firebaseConfig;
    }
}
