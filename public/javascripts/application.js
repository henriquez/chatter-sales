// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// Every jQuery function you want to run at render time must be inside the jQuery call
jQuery(function() {

    // text areas should auto-expand
	$('textarea#post-text-area').TextAreaExpander(60, 1300);


   // submit form to qas#show when engine picker is changed
    $('select#engine_index').change( function() {
      $('form#engine_picker').submit();
    });


   // run search when search button clicked
    $('button#search-button').click( function() {
	  runSearch();
    });


   // run search when return key is hit and focus is on the search bar
	$('#search-field').keydown(function(event) {
	  if (event.keyCode == '13') {  // user hit the return key
	     runSearch();
	   }
	});

 	// Styling calls
    $( "#tabs" ).tabs();  // inside the _header partial, top of page

    // Callouts
    $( "#products-header" ).callout({
	    position: "bottom", 
	    msg: "This demo app illustrates how Chatter can be integrated into a product information site using the Chatter API.  <a id='walkthru-1'>Start</a> ",
	    width: 300
	});
	
	// hide the first callout whe start is clicked
	// and show the second callout
	$( "#walkthru-1" ).click(function() { 
		$( "#products-header" ).callout("hide");
		$( "#product-description" ).callout({
	        position: "right", 
	        width: 300,
	        msg: "Product descriptions and specifications are pulled from a custom object in Salesforce.  Changes to products appear as tracked changes in the feed associated with this product, allowing the external website to be updated from Salesforce. Buyers who follow this product to get notified when a design change may affect them.  <a id='walkthru-2'>Next</a> "
	    });
	});
	
	$( "#walkthru-2" ).click(function() { 
		$( "#product-description" ).callout("hide");
		$( "#feed-items" ).callout({
	        position: "left", 
	        width: 200,
	        msg: "Each product has a feed, letting prospective buyers ask questions which are relayed into the Salesforce org so that the sales team for that product can answer them in Chatter.  Customers can benefit from previous Q&A around a product by searching for answers.  <a id='walkthru-3'>Next</a> "
	    });
	});
		
});


// Ajax query that runs a search.
function runSearch() {
	var myParams = { search: $('input#search-field').val(), 
	                 engine_id: $('input#search-field').attr('data-engine-id')
	                };	  
	$.getScript("/qas/search.js" + "?" + $.param(myParams) );
}	


// **************************************************
// lower level functions that don't run unless called
// **************************************************





