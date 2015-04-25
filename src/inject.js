var injected = injected || (function(){
	
var imgContainer = $("#viewer");	// Jquery for getting element w/ id "viewer"
var pageSelectors = $(".wid60")[0]	// Jquery for getting class named 'wid60'
									// it returns a list. Grabs first element of this list 
imgContainer.empty();				// Clears the container

for(i = 0; i < pageSelectors.length ; i++)											
{
	/*
		PageSelector contains a list of option elements
		that looks like this: <option value="http://www.mangahere.co/manga/onepunch_man/c043.1/" selected="selected">1</option>
		we want to get the content within "value"
	*/
	url = pageSelectors[i].value;					// Parses the url out of the selector
	imgContainer.append('<div id=img'+i+'></div>')	// Makes a div element w/ a dynamic id relative to the page #
													// Add it to the page
	$('#img'+i).load( url +' #image')				// Load the url, grab the element w/ id 'image', add it to our new div element
}

  return true;
})();