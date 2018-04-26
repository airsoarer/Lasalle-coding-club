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

    // Get firebase uid from URL
    var location = window.location.href;
    location = location.split("=");
    var uid = location[1];
    // console.log(uid);

function init(){
    firebase.initializeApp(config);
    // Get Firebase ref
    var ref = firebase.database().ref("Chatrooms/" + uid);
    ref.on("value", function(snapshot){
        // Get data
        var data = snapshot.val();

        // Change H1 to chatroom name in Firebase
        $('#chatroomName').text(data.Name);

        for(var i in data.Messages){
            // Make p tag form messages
            var p = document.createElement("p");
            p.textContent = data.Messages[i].Name + ": " + data.Messages[i].Message;

            // Append to html
            $('.messages').append(p);
        }
    });

    // Watch from SEND BUTTON CLICK
    $(".send").on('click', send);
    $("#message").keyup(function(e){
      if(e.keyCode === 13){
        send();
      }
    });
}

function send(){
    // Get Name
    var name = $("#name").val();
    // Get message
    var message = $("#message").val();

    $("#messages").empty();

    // Get Firebase ref
    var ref = firebase.database().ref("Chatrooms/" + uid + "/Messages");

    // Send data to Firebase
    ref.push({
        Name:name,
        Message:message,
    });

    // Get Message back and display it
    ref.on("value", function(snapshot){
        var data = snapshot.val();
        console.log(data);

        for(var i in data.Messages){
          // Make p tag
          var p = document.createElement("p");
          p.textContent = data.Messages[i].Name + ": " + data.Messages[i].Message;

          // Append newly made tag to HTML
          $(".messages").append(p);
        }
    });

    $('#message').val('');
}
})();
