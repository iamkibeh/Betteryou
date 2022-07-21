
//   copy your firebase config informations
const firebaseConfig = {
    apiKey: "AIzaSyC6ZnRYTQ5WO2BZGNUznZzpWGVxu_Qs0VY",
    authDomain: "contactform-6bcae.firebaseapp.com",
    databaseURL: "https://contactform-6bcae-default-rtdb.firebaseio.com",
    projectId: "contactform-6bcae",
    storageBucket: "contactform-6bcae.appspot.com",
    messagingSenderId: "16191521042",
    appId: "1:16191521042:web:012cf56838a312f73b33cb",
    measurementId: "G-NRPHH2LE25"
  };
    // initialize firebase
    firebase.initializeApp(firebaseConfig);
    // reference your database
    var contactFormDB = firebase.database().ref("contactForm");
    // signup form (login form)
    document.getElementById("loginForm").addEventListener("submit", submitForm);
    function submitForm(e) {
      e.preventDefault();
      contactFormDB.on('value',snapshot=>{
        console.log('snapshot.val()')
      });
      console.log('working')
    }