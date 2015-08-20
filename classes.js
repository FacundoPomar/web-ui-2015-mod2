/**
 * Vehicle constructor function
 * @param float speed     set the speed of the vehicle
 * @param PropulsionUnits Array propUnits array of propulsionUnits to add to the vehicle
 */
function Vehicle(speed, propUnits) {
    var speed = speed || 0;
    var propUnits = propUnits || [];

    function getSpeed() {
        return speed;
    }

    function setSpeed(aSpeed) {
        speed = aSpeed;
    }

    function getPropUnits() {
        return propUnits;
    }

    function addPropUnit(aPropUnit) {
        propUnits.push(aPropUnit);
    }

    function accelerate() {
        for (var i = 0; i < propUnits.length; i++) {
            speed += propUnits[i].getAcceleration();
        }
    }

    return {
        getSpeed: getSpeed,
        getPropUnits : getPropUnits,
        addPropUnit : addPropUnit,
        accelerate : accelerate,
    }
}
