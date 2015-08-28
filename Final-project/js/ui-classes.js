//
// ##### Land Vehicle  #######
//

function LandVehicleUI(aLandVehicle) {
    var land = aLandVehicle;

    function renderControls(container) {
        var el = $(container);

        el.html($("<label></label>", {
            text: "Wheels Radius"
        }));

        el.append($("<input>", {
            id : 'radiusWheels',
            type : "number",
            class : "form-control",
            text: 0,
        }));

        setEvents(el);
    }

    function renderAnimation(container) {
        var el = $(container);

        //Get img of vehicle
        el.html(
            $(".vehicle-options [vehicle-type='land'] img").clone()
            )
        .append(
            $("<div></div>",
            {
                class : "vehicle-info-container",
            })
            .append(
                $("<div></div>", {
                    class : "vehicle-info",
                })
                )

            );
        refreshInfoBox();
    }

    function refreshInfoBox() {
        $(".vehicle-info").html("<strong>Number of Wheels:</strong> " + land.getPropUnits().length + "<br /> " + "<strong>Speed:</strong> " + land.getSpeed().toFixedDown(2));
    }

    function setEvents(el) {
        $(document).ready(function () {

            el.find("#radiusWheels").on("keyup change", function () {
                land.setWheelsRadius(($(this).val() > 0) ?  $(this).val() : 0);
                land.accelerate();
                refreshInfoBox();
                // console.log(land.getSpeed());
            })

        });

    }

    return {
        renderControls : renderControls,
        renderAnimation : renderAnimation,
    }
}

//
// ##### Air Vehicle  #######
//

function AirVehicleUI(anAirVehicle) {
    var air = anAirVehicle;

    function renderControls(container) {
        var el = $(container);

        el.html($("<label></label>", {
            text: "Power"
        }));

        el.append($("<input>", {
            id : 'power',
            type : "number",
            class : "form-control",
            text: 0,
        }));

        el.append(
            $("<div></div>", {
                class : "btn-group afterburner",
                'data-toggle' : "buttons"
            })
            .append(
                $("<label></label>", {
                    class : "btn btn-primary",
                })
                .append(
                    $("<input>", {
                        type : "radio",
                        name : "afterburner",
                        id : "on",
                        autocomplete : "off",
                        value : "on",
                    })
                    )
                )
            .append(
                $("<label></label>", {
                    class : "btn btn-primary active", //afterburner Off by default
                })
                .append(
                    $("<input>", {
                        type : "radio",
                        name : "afterburner",
                        id : "off",
                        autocomplete : "off",
                        value : "off",
                    })
                    )
                )
            );
        //Horrible way
        $("#on").after("ON");
        $("#off").after("OFF");



        setEvents(el);
    }

    function renderAnimation(container) {
        var el = $(container);

        //Get img of vehicle
        el.html(
            $(".vehicle-options [vehicle-type='air'] img").clone()
            )
        .append(
            $("<div></div>",
            {
                class : "vehicle-info-container",
            })
            .append(
                $("<div></div>", {
                    class : "vehicle-info",
                })
                )

            );
        refreshInfoBox();
    }

    function refreshInfoBox() {
        $(".vehicle-info").html(
            "<strong>Power:</strong> " +
            air.getPower() + "<br /> " +
            "<strong>Arterburner: </strong>" + (air.getAfterBurner() ? "ON" : "OFF") + "<br />" +
            "<strong>Speed:</strong> " +
            air.getSpeed().toFixedDown(2));
    }

    function setEvents(el) {
        $(document).ready(function () {

            el.find("#power").on("keyup change", function () {
                air.setPower($(this).val());
                refreshInfoBox();
                // console.log(land.getSpeed());
            })
            el.find("[name='afterburner']").on("change", function () {

                if ($(this).val() === "off") {
                    air.afterBurnersOFF();
                } else {
                    air.afterBurnersON();
                }
                refreshInfoBox();
            })

        });

    }

    return {
        renderControls : renderControls,
        renderAnimation : renderAnimation,
    }
}

//
// ##### Water Vehicle  #######
//

function WaterVehicleUI(aWaterVehicle) {
    var water = aWaterVehicle;

    function renderControls(container) {
        var el = $(container);

        el.html($("<label></label>", {
            text: "Amount of Propellers"
        }));

        el.append($("<input>", {
            id : 'amounPropellers',
            type : "number",
            class : "form-control",
            html: 0,
        }));

        el.append($("<label></label>", {
            text: "Fins per Propellers"
        }));

        el.append($("<input>", {
            id : 'fins',
            type : "number",
            class : "form-control",
            html: 0,
        }));

        el.append($("<label></label>", {
            text: "Direction"
        }));

        el.append("<select id='propeller-direction' class='form-control'>" +
            "<option value='clockwise' selected>Clockwise</option>" +
            "<option value='counter-clockwise'>Counter Clockwise</option>" +
            "</select>");

        setEvents(el);
    }

    function renderAnimation(container) {
        var el = $(container);

        //Get img of vehicle
        el.html(
            $(".vehicle-options [vehicle-type='water'] img").clone()
            )
        .append(
            $("<div></div>",
            {
                class : "vehicle-info-container",
            })
            .append(
                $("<div></div>", {
                    class : "vehicle-info",
                })
                )

            );
        refreshInfoBox();
    }

    function refreshInfoBox() {
        $(".vehicle-info").html("N° Propellers: " + water.getPropUnits().length + "<br />" +
            "Fins per Propeller: " + water.getFinsPerPropeller() + "<br />" +
            "Direction: " + water.getDirection() + "<br />" +
            "Speed: " + water.getSpeed()
            );
    }

    function setEvents(el) {
        $(document).ready(function () {

            el.find("#amounPropellers").on("keyup change", function () {
                var dire = (el.find("#propeller-direction").val() === "clockwise") ? true : false;
                water.reset($(this).val(), el.find("#fins").val(), dire);
                water.accelerate();
                refreshInfoBox();
            });

            el.find("#fins").on("keyup change", function () {
                var dire = (el.find("#propeller-direction").val() === "clockwise") ? true : false;
                water.reset(el.find("#amounPropellers").val(), $(this).val(), dire);
                water.accelerate();
                refreshInfoBox();
            });

            el.find("#propeller-direction").on("change", function () {
                if ($(this).val() === "clockwise") {
                    water.directionClockwise();
                } else {
                    water.directionCounterClockwise();
                }
                refreshInfoBox();
            })

        });

}

return {
    renderControls : renderControls,
    renderAnimation : renderAnimation,
}
}


//
// ##### Amphibious Vehicle  #######
//

function AmphibiousVehicleUI(anAmphi) {
    var amphi = anAmphi;
    var modes = amphi.getModes();
    var currentMode = amphi.getMode();

    function renderControls(container) {
        var el = $(container);
        el.html("<select id='amphi-modes' class='form-control'>" +
            "<option value='water'>Water Mode</option>" +
            "<option value='land'>Land Mode</option>" +
            "</select>");

        var fieldContainer = $("<div></div>", {class : 'amphi-fields'});

        el.append(fieldContainer);
        console.log(currentMode["name"]);
        if (currentMode["name"] === "water") {
            fieldContainer.append($("<label></label>", {
                text: "Amount of Propellers"
            }));

            fieldContainer.append($("<input>", {
                id : 'amounPropellers',
                type : "number",
                class : "form-control",
                html: 0,
            }));

            fieldContainer.append($("<label></label>", {
                text: "Fins per Propellers"
            }));

            fieldContainer.append($("<input>", {
                id : 'fins',
                type : "number",
                class : "form-control",
                html: 0,
            }));

            fieldContainer.append($("<label></label>", {
                text: "Direction"
            }));

            fieldContainer.append("<select id='propeller-direction' class='form-control'>" +
                "<option value='clockwise' selected>Clockwise</option>" +
                "<option value='counter-clockwise'>Counter Clockwise</option>" +
                "</select>");
        } else {
            fieldContainer.append($("<label></label>", {
                text: "Wheels Radius"
            }));

            fieldContainer.append($("<input>", {
                id : 'radiusWheels',
                type : "number",
                class : "form-control",
                text: 0,
            }));
        }

        //Set UI current mode
        $("#amphi-modes").val(currentMode.name);

        setEvents(el);
    }

    function renderAnimation(container) {
        var el = $(container);

        //Get img of vehicle
        el.html(
            $(".vehicle-options [vehicle-type='amphibious'] img").clone()
            )
        .append(
            $("<div></div>",
            {
                class : "vehicle-info-container",
            })
            .append(
                $("<div></div>", {
                    class : "vehicle-info",
                })
                )

            );
        refreshInfoBox();
    }

    function refreshInfoBox() {
        if (currentMode["name"] === "water") {
            $(".vehicle-info").html("N° Propellers: " + currentMode.obj.getPropUnits().length + "<br />" +
                "Fins per Propeller: " + currentMode.obj.getFinsPerPropeller() + "<br />" +
                "Direction: " + currentMode.obj.getDirection() + "<br />" +
                "Speed: " + currentMode.obj.getSpeed()
                );
        } else {
            $(".vehicle-info").html("<strong>Number of Wheels:</strong> " + currentMode.obj.getPropUnits().length + "<br /> " +
            "<strong>Speed:</strong> " + currentMode.obj.getSpeed().toFixedDown(2));

        }
    }

    function setEvents(el) {
        $(document).ready(function () {

            //Water Mode
            el.find("#amounPropellers").on("keyup change", function () {
                var dire = (el.find("#propeller-direction").val() === "clockwise") ? true : false;
                currentMode.obj.reset($(this).val(), el.find("#fins").val(), dire);
                currentMode.obj.accelerate();
                refreshInfoBox();
            });

            el.find("#fins").on("keyup change", function () {
                var dire = (el.find("#propeller-direction").val() === "clockwise") ? true : false;
                currentMode.obj.reset(el.find("#amounPropellers").val(), $(this).val(), dire);
                currentMode.obj.accelerate();
                refreshInfoBox();
            });

            el.find("#propeller-direction").on("change", function () {
                if ($(this).val() === "clockwise") {
                    currentMode.obj.directionClockwise();
                } else {
                    currentMode.obj.directionCounterClockwise();
                }
                refreshInfoBox();
            })

            el.find("#amphi-modes").on("change", function () {
                if ($(this).val() !== currentMode.name) {
                    currentMode.obj.stop();
                    if ($(this).val() === "land") {
                        amphi.switchLand();
                    } else {
                        amphi.switchWater();
                    }
                    currentMode = amphi.getMode();
                    $(".vehicle-fields").slideUp(function () {
                        renderControls(".vehicle-fields");
                        refreshInfoBox();
                    }).slideDown();
                    setEvents(el);

                }
            });

            el.find("#radiusWheels").on("keyup change", function () {
                currentMode.obj.setWheelsRadius(($(this).val() > 0) ?  $(this).val() : 0);
                currentMode.obj.accelerate();
                refreshInfoBox();
            })

        });

}

return {
    renderControls : renderControls,
    renderAnimation : renderAnimation,
}
}
