var Instrument = function(instrument, description, image) {
	this.instrument = instrument;
	this.description = description;
	this.image = image;


//this.render
};

$(".instrument-form").on("submit", function(e) {
	e.preventDefault();
	console.log(this);
	var instrument = $(this).find(".instrument-field").val();
	var description = $(this).find(".description-field").val();
	var imageUrl =  $(this).find(".url-field").val();
	var oneInstrument = new Instrument(instrument, description, imageUrl);
	console.log(instrument);

	

	$(".instrument-image").attr("src", imageUrl);
$(".btn").on("click", function() {
	console.log(oneInstrument);
});
});



