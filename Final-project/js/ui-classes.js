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
                // console.log($(this).val());
                // $("[name='afterburner']").parent(".active").children().attr("id")
                // .find("[name='afterburner']").parent(".active").children().attr("id")
                if ($(this).val() === "off") {
                    air.afterBurnersOFF();
                } else {
                    air.afterBurnersON();
                }
                refreshInfoBox();
                // console.log(land.getSpeed());
            })

            // el.find("#radiusWheels").on("keyup change", function () {
            //     land.setWheelsRadius(($(this).val() > 0) ?  $(this).val() : 0);
            //     land.accelerate();
            //     refreshInfoBox();
            //     // console.log(land.getSpeed());
            // })

    });

    }

    return {
        renderControls : renderControls,
        renderAnimation : renderAnimation,
    }
}
