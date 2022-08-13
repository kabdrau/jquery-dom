$('#submit').on("click", function(){
	console.log("YOU ADDED");
	let movieName = $("#movie-title").val();
	let movieRating = $("#movie-rating").val();
	if (movieName.length >= 2 && !!movieRating && movieRating >= 0 && movieRating <= 10 ) {
		$("#movie-list")
		.append("<li>" + movieName + " " + movieRating + " <button id='remove'>Remove</button></li>");
	}
})

$("#movie-list").on("click", "#remove", function(){
	console.log("YOU REMOVED");
	$('#remove').parent().remove();
})