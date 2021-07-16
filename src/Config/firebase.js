import firebase from 'firebase';
    var firebaseConfig = {
        apiKey: "AIzaSyBFSalEOiStYP1AdrGmDMGhVTyh4nQHvbM",
        authDomain: "react-andres-utn.firebaseapp.com",
        projectId: "react-andres-utn",
        storageBucket: "react-andres-utn.appspot.com",
        messagingSenderId: "580764817965",
        appId: "1:580764817965:web:4447f54d785355f6b6b6a4",
        measurementId: "G-KMC1NLJDDX"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.db = firebase.firestore()
      firebase.autentication = firebase.auth()
export default firebase