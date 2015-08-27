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

    function getVehicle() {
        return land;
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
        getVehicle : getVehicle,
    }
}
