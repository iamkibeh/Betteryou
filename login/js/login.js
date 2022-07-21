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
  // for login form (signup form)
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  function submitForm(e) {
    e.preventDefault();
    var password = getElementVal("name");
    var emailid = getElementVal("emailid");
    saveMessages(password, emailid);
    //   enable alert
    document.querySelector(".alert").style.display = "block";
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
    //   reset the form
    document.getElementById("contactForm").reset();
    console.log('working')
  }
  const saveMessages = (password, emailid) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
      password: password,
      emailid: emailid,
    });
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  
  
  
  
  
  
  
  
  