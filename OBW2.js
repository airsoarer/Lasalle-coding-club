(function(){
  $(document).ready(init);
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
  $('#submit').on('click', getData);
}

function getData(){
  var name = $('#name').val();
  var descript = $("#description").val();

  var ref = firebase.database().ref('Chatrooms').push({
    Name:name,
    Description:descript,
  }).then(() => {
    ref.on("child_added", function(snapshot){
        var key = snapshot.key;
        location.replace("chatroom.html?room=" + key);
    });
  });
}
})();
