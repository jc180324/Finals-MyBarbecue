// Initialize Firebase 
var config = {
    apiKey: "AIzaSyDY4-KrThTqG-wHx1uGtuJewtCeSEVFSNQ",
    authDomain: "contactform-a9a0e.firebaseapp.com",
    databaseURL: "https://contactform-a9a0e.firebaseio.com",
    projectId: "contactform-a9a0e",
    storageBucket: "contactform-a9a0e",
    messagingSenderId: "950474002726"
  };
  firebase.initializeApp(config);
  
  var messagesRef = firebase.database().ref('messages');
  
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  

  function submitForm(e){
    e.preventDefault();
  

    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    saveMessage(name, email, message);
  
    document.querySelector('.alert').style.display = 'block';
  
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },5000);
  
    document.getElementById('contactForm').reset();
  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      message:message
    });
  }