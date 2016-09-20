
//prevent default submit action
var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  });


//click add and new item is added to list
$('#addButton').click(function() {
	var itemToAdd = $('#addItem').val();
	$('#olList').append('<li>' + itemToAdd + '<ul><a href="#"><li id="x" class="x">X</li></a></ul></li>');
});


// Attach a delegated event handler
$( "#olList" ).on( "click", "li", function( event ) {
    $(this).fadeOut('slow');
});
