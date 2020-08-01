import firebase from 'firebase'
const firebaseApp=firebase.initializeApp(
    {
        
            apiKey: "AIzaSyC7djROyNBBALTOumw5_JCDkNMqDJpmeD4",
            authDomain: "mihir-56537.firebaseapp.com",
            databaseURL: "https://mihir-56537.firebaseio.com",
            projectId: "mihir-56537",
            storageBucket: "mihir-56537.appspot.com",
            messagingSenderId: "470574138865",
            appId: "1:470574138865:web:fe53b05ad9d43b308ab050",
            measurementId: "G-P4ND4JQGKL"
          

    }

)
const db=firebaseApp.firestore()


export default db;