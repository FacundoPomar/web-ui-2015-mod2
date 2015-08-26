$(document).ready(function () {

    $(".vehicle-option").slideDown();

    $(".vehicle-option").on("click", function () {
        //Select current ui-class
        console.log($(this).attr("vehicle-type"));
        $(".vehicle-fields").slideDown();
    });

});

