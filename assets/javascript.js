// A $( document ).ready() block.
$( document ).ready(function() {


$("#submit").on("click", function(){
	console.log("working?", $("#search").val())
	// $("#search").val()
	var button = $("<button>");
	button.text($("#search").val());
	button.attr("id", "searchTerm");
	$("#buttonContainer").append(button);
});

$("#buttonContainer").on("click", "button", function(event){
	event.preventDefault();
	console.log("working", $(this).text())
});
	
    console.log( "ready!" );
});

