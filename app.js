var five = require("johnny-five");
var firebase = require("firebase");

firebase.initializeApp({
  serviceAccount: "./raluce-firebase-config.json",
  databaseURL: "https://raluce-cloud.firebaseio.com"
});

var ref = firebase.database().ref().child("button");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.off();

  ref.on("value", function(snapshot) {
    console.log(snapshot.val());

    if(snapshot.val()) {
      led.on();
    }else {
      led.off();
    }
  });
});
