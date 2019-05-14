/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	addModalCloseHandler();
}
function makeGallery(imageArray){
	//<figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-1.jpg);">
	//	<figcaption>landscape-1.jpg</figcaption>
	//</figure>

	//use loops and jquery dom creation to make the html structure inside the #gallery section
	//create a loop to go through the pictures
		//create the elements needed for each picture, store the elements in variable
		//attach a click handler to the figure you create.  call the "displayImage" function.  
		//append the element to the #gallery section
	for(var imageCounter = 0; imageCounter < pictures.length; imageCounter++){
		var newFigure = $("<figure>").addClass("imageGallery col-xs-12 col-sm-6 col-md-4");
		var image_full_url = pictures[imageCounter];
		$(newFigure).css("background-image", "url(" + image_full_url + ")");
		var image_short_url = pictures[imageCounter].slice(7);
		var fig_caption = $("<figcaption>").text(image_short_url);
		$(newFigure).append(fig_caption);
		$(newFigure).click(displayImage);
		$("#gallery").append(newFigure);
	};
}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
	$("img").click(function(){
		$("#galleryModal").modal("hide");
	});
}

function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method
		var clicked_image_src = $(this).css("background-image");
		var modal_src_cutPosition1 = clicked_image_src.lastIndexOf("/") + 1;
		var modal_src_cutPosition2 = clicked_image_src.lastIndexOf(".");
		var modal_image_name = clicked_image_src.slice(modal_src_cutPosition1, modal_src_cutPosition2);

	//change the modal-title text to the name you found above
		$(".modal-title").text(modal_image_name);

	//change the src of the image in the modal to the url of the image that was clicked on
		var modal_url_cutPosition1 = clicked_image_src.lastIndexOf("(") + 2;
		var modal_url_cutPosition2 = clicked_image_src.lastIndexOf(")") - 1;
		var modal_url = clicked_image_src.slice(modal_url_cutPosition1, modal_url_cutPosition2);
		$("img").attr("src", modal_url);

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
		$("#galleryModal").modal("show");
}
