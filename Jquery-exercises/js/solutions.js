// Select all of the div elements that have a class of "module".

$(".module");

// Come up with three selectors that you could use to get the third item in the #myList unordered list

$("#myList li:nth-of-type(3)");
$("#myList li:nth-child(3)");
$("#myListItem");

// Select the label for the search input using an attribute selector

$("#search label");

// Count hidden elements on the page
//     (hint: .length)

$("body :hidden").length

// Count the image elements that have an alt attribute

$("img[alt]");

// Select all of the odd table rows in the table body

$("#fruits tbody tr:odd");

// Select all of the image elements on the page
// Log each image's alt attribute

$("img").each(function () {
    console.log($(this).attr("alt"));
});

// Select the search input text box, then traverse up to the form and add a class to the form.

$(".input_text[name='q']").parent().addClass("a-new-class");

// Select the list item inside #myList that has a class of "current"
// Remove that class from it
// Add a class of "current" to the next list item



// Select the select element inside #specials
// Traverse your way to the submit button.



// Select the first list item in the #slideshow element
// Add the class "current" to it, and then add a class of "disabled" to its sibling elements



// Add five new list items to the end of the unordered list #myList



// Remove the odd list items



// Add another h2 and another paragraph to the last div.module



// Add another option to the select element
// Give the option the value "Wednesday“



// Add a new div.module to the page after the last one
// Put a copy of one of the existing images inside of it
