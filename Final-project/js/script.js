Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

var currentVehicle = {};
var currentVehicleUI = {};

$(document).ready(function () {

    var vehicles = {
        "land" : {
            "constructor" : LandVehicle,
            "UI" : LandVehicleUI,
        }
    }

    $(".vehicle-option").slideDown();

    $(".vehicle-option").on("click", function () {
        //Select current ui-class
        currentVehicle = vehicles[$(this).attr("vehicle-type")]["constructor"]();
        currentVehicleUI = vehicles[$(this).attr("vehicle-type")]["UI"](currentVehicle);
        currentVehicleUI.renderControls(".vehicle-fields");
        currentVehicleUI.renderAnimation(".vehicle-animation");
        $(".vehicle-fields").slideDown();
        $(".vehicle-animation").slideDown();
    });

});

