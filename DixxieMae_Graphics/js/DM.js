//Problem: User when clicking on image leads to a dead end.
//Solution: create an overlay with the lage image. -lightbox.

//class="col-md-6 img-responsive"
var $overlay = $('<div id="overlay" class="img-responsive"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//Add an image to overlay
$overlay.append($image);

//Add caption to overlay
$overlay.append($caption);

//Add an overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay
  $overlay.show();
  
  //Get child's alt attrib and set caption.
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked, 
$overlay.click(function(){
  //Hide the overlay. 
  $overlay.hide();
});
  
