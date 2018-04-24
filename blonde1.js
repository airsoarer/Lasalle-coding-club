(function(){
  $(document).ready(init);

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC-CoIxETvyuuv6i35pYnVaq72Vxy6_Ai4",
    authDomain: "operation-blonde-wig.firebaseapp.com",
    databaseURL: "https://operation-blonde-wig.firebaseio.com",
    projectId: "operation-blonde-wig",
    storageBucket: "operation-blonde-wig.appspot.com",
    messagingSenderId: "618047403093"
  };

function init(){
  firebase.initializeApp(config);
  // Get firebase reference
  var ref = firebase.database().ref("Chatrooms");
  // Get data from firebase
  ref.once('value', function(snapshot){
    var data = snapshot.val();
    // Get Chatroom uid (Unique ID)
    var key = snapshot.key;


    // Make div for chatroom on html
    var div = document.createElement("div");
    // Make div id and class
    div.className = "chatroomDiv";
    div.id = key + "div";

    // Make a tag
    var a = document.createElement("a");
    // Set text
    a.textContent = data.Name;
    // Create id and class
    a.className = "chatroomA";
    a.id = key + "a";
    $(a).attr("src", "chatroom.html?room=" + key);
    // Append to chatroomDiv
    div.appendChild(a);

    // Make description tag
    var descript = document.createElement("h5");
    // Set textContent
    descript.textContent = data.Description;
    // Create id and className
    descript.className = "chatroomDescript";
    descript.id = key + "descript";
    // Append to chatroomDiv
    div.appendChild(descript);

    //Append chatroomDiv to the groups div
    document.getElementById("groups").appendChild(div);
  });
}

})();
