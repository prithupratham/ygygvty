// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBthsK_q9mV6sLQ1Nd-CFrRq1B2lgldiOo",
    authDomain: "kwitter-61652.firebaseapp.com",
    databaseURL: "https://kwitter-61652-default-rtdb.firebaseio.com",
    projectId: "kwitter-61652",
    storageBucket: "kwitter-61652.appspot.com",
    messagingSenderId: "43058697612",
    appId: "1:43058697612:web:76e446b21ffa3825f672a9",
    measurementId: "G-CWM850CP3S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE
user_name = localstorage.getItem("User");
document.getElementById("User").innerHTML = "welcome " + user_name + "!";

function addroom(){
  room_name = document.getElementById("Room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room name - " + Room_names);
       row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}