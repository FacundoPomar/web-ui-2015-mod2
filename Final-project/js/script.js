Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
    m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

var currentVehicle = undefined;
var currentVehicleUI = undefined;

var vehicles = {
    "land" : {
        "constructor" : LandVehicle,
        "UI" : LandVehicleUI,
    },
    "air" : {
        "constructor" : AirVehicle,
        "UI" : AirVehicleUI,
    },
    "water" : {
        "constructor" : WaterVehicle,
        "UI" : WaterVehicleUI,
    }
}

$(document).ready(function () {



    $(".vehicle-option").slideDown();

    $(".vehicle-option").on("click", function () {

        var elem = this;

        $(".vehicle-fields").slideUp();
        $(".vehicle-animation").slideUp(function () {
            initialiceVehicle(elem, function () {
               $(".vehicle-fields").slideDown();
               $(".vehicle-animation").slideDown();
           })
        });




    });

});

function initialiceVehicle(option, callback) {

    currentVehicle = vehicles[$(option).attr("vehicle-type")]["constructor"]();
    currentVehicleUI = vehicles[$(option).attr("vehicle-type")]["UI"](currentVehicle);
    currentVehicleUI.renderControls(".vehicle-fields");
    currentVehicleUI.renderAnimation(".vehicle-animation");

    if (callback) {
        callback();
    }
}

