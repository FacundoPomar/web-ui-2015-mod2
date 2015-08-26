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

$("#myList .current").removeClass("current").next().addClass("current")

// Select the select element inside #specials
// Traverse your way to the submit button.

$("#specials select").parent().next().children().first()

// Select the first list item in the #slideshow element
// Add the class "current" to it, and then add a class of "disabled" to its sibling elements

$("#slideshow").children().first().addClass("current").siblings().each(function () {
    $(this).addClass("disabled");
});

// Add five new list items to the end of the unordered list #myList

var amount = $("#myList").children().length;
for (var i = amount +1; i < amount + 6; i++) {
    $("#myList").append($("<li></li>", {text: "List item " + i}));
}

// Remove the odd list items

$("#myList li:odd").remove();

// Add another h2 and another paragraph to the last div.module

$(".module")
.last()
.append($("<h2></h2>", {
    text : "I'm a the new H2 title"
}))
.append($("<p></p>", {
    text : "I'm a the new paragraph"
}))

// Add another option to the select element
// Give the option the value "Wednesday“

$("#specials form ul li select")
.append($("<option></option>", {
    text: "Wednesday",
    value : "Wednesday"
}));

// Add a new div.module to the page after the last one
// Put a copy of one of the existing images inside of it

//Una variación a usar .last()
$(".module:last")
.after($("<div></div>", {
    class: "module"
})
.append($("img")
    .last()
    .clone())
)
