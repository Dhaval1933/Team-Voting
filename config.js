import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyBCl8IsbX5mS3snDjMWahzrhW7Ds1hUrho",
        authDomain: "proj-83bc9.firebaseapp.com",
        projectId: "proj-83bc9",
        storageBucket: "proj-83bc9.appspot.com",
        messagingSenderId: "19185750407",
        appId: "1:19185750407:web:7fb9303bee04514bf40322"     
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();