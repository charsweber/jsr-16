// Initialize Firebase
var config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>'
};
firebase.initializeApp(config);

$(document).ready(function() {
  var database = firebase.database();


  // CREATE

  $('#message-form').submit(function(event) {
    // by default a form submit reloads the DOM which will subsequently reload all our JS
    // to avoid this we preventDefault()
    event.preventDefault();

    // grab user message input
    var message = $('#message').val();

    // clear message input (for UX purposes)
    $('#message').val('');

    // create a section for messages data in your db
    var messagesReference = database.ref('messages');

    // use the set method to save data to the messages
    messagesReference.push({
      message: message,
      votes: 0
    });
  });

  // READ
  function getFanMessages() {

    // use reference to app database to listen for changes in messages data
    // hint: use something referring to 'value'

      // iterate through results coming from database call; messages

        // bind the results to the DOM
  }
});