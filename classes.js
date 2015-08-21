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

function Wheel(aRadius) {
    var radius = aRadius || 0;

    function getRadius() {
        return radius;
    }

    function setRadius(aRadius) {
        radius = aRadius;
    }

    function getAcceleration() {
        return 2 * getRadius() * Math.PI;
    }

    return {
        getRadius : getRadius,
        setRadius : setRadius,
        getAcceleration : getAcceleration,
    }
}

function PropellingNozzle(aPower, anAfterburner) {
    var power = aPower || 0;
    var afterburner = !!anAfterburner || false;

    function getPower() {
        return power;
    }

    function setPower(aPower) {
        power = aPower;
    }

    function getAfterBurner() {
        return afterburner;
    }

    function afterBurnerON() {
        afterburner = true;
    }

    function afterBurnerOFF() {
        afterburner = false;
    }

    function getAcceleration() {
        return getPower() * (getAfterBurner() ? 2 : 1);
    }

    return {
        getPower : getPower,
        setPower : setPower,
        getAfterBurner : getAfterBurner,
        afterBurnerON : afterBurnerON,
        afterBurnerOFF : afterBurnerOFF,
        getAcceleration : getAcceleration,
    }
}

function Propeller(aFins, aDirection) {
    var fins = aFins || 0;
    var direction = !!aDirection || true;

    function getFins() {
        return fins;
    }

    function setFins(aFins) {
        fins = aFins;
    }

    function getDirection() {
        return (direction ? 'clockwise' : 'counter-clockwise');
    }

    function getAcceleration() {
        return (direction ? getFins() : -1 * getFins())
    }

    function directionCounterClockwise() {
        direction = false;
    }

    function directionClockwise() {
        direction =true;
    }

    return {
        getFins : getFins,
        setFins : setFins,
        getDirection : getDirection,
        getAcceleration : getAcceleration,
        directionCounterClockwise : directionCounterClockwise,
        directionClockwise : directionClockwise,
    }
}
