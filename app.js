// Initialize Firebase
// add config

firebase.initializeApp(config);

$(document).ready(function() {
  var database = firebase.database();


  // STEP 1: CREATE

  $('#message-form').submit(function(event) {
    // by default a form submit reloads the DOM which will subsequently reload all our JS
    // to avoid this we preventDefault()
    event.preventDefault();
    $('.message-board').empty();
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

  $('#artist-form').submit(function(event) {
    event.preventDefault();
    var newArtist = $('#new-artist').val();
    $('#new-artist').val('');
    var artistNames = database.ref('artists');
    $('h1').html(newArtist);
    artistNames.push({
      artists: newArtist
    });
  });

getFanMessages();
getArtist();
  // READ
  function getFanMessages() {

    // use reference to app database to listen for changes in messages data
    // hint: use something referring to 'value'

    var messagesReference = database.ref('messages');

    messagesReference.on('value', function(results) {

      var allMessages = results.val();
    // iterate through results coming from database call; messages
      var $messageBoard = $('.message-board');
      for (var comment in allMessages) {
        // bind the results to the DOM
        var $li = $('<li></li>');
        $li.html(allMessages[comment].message);
        $messageBoard.append($li);
      }

    });       
  }

  function getArtist() {
    var artistNames = database.ref('artists');
    artistNames.on('value', function(results) {
      var allArtists = results.val();
      console.log(allArtists);
      var lastArtist = allArtists[Object.keys(allArtists)[Object.keys(allArtists).length - 1]];
      console.log(lastArtist.artists);
      $('h1').html(lastArtist.artists);
    })
  }
});













