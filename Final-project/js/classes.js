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
        return +power;
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
        speed = 0;
        for (var i = 0; i < propUnits.length; i++) {
            speed += propUnits[i].getAcceleration();
        }
    }

    function stop() {
        speed = 0;
    }

    return {
        getSpeed: getSpeed,
        getPropUnits : getPropUnits,
        addPropUnit : addPropUnit,
        accelerate : accelerate,
        stop : stop,
    }
}

function LandVehicle(aWheelRadius) {
    var that = Vehicle();

    initialice(aWheelRadius);

    function initialice(aWheelRadius) {
        //Add wheels
        for (var i = 0; i < 4; i++) {
            that.addPropUnit(
                new Wheel(aWheelRadius)
                );
        }
    }

    that.setWheelsRadius = function (aRadius) {
        var propUnits = that.getPropUnits();
        for (var i = 0; i < propUnits.length; i++) {
            propUnits[i].setRadius(aRadius);
        }
    }

    return that;
}

function AirVehicle(aPower) {
    var that = Vehicle();

    initialice(aPower || 0);

    function initialice(aPower) {
        that.addPropUnit(
            new PropellingNozzle(aPower, false)
            );
    }

    that.afterBurnersON = function() {
        var propUnits = that.getPropUnits();
        for (var i = 0; i < propUnits.length; i++) {
            propUnits[i].afterBurnerON();
        }
        that.accelerate();
    }

    that.afterBurnersOFF = function() {
        var propUnits = that.getPropUnits();
        for (var i = 0; i < propUnits.length; i++) {
            propUnits[i].afterBurnerOFF();
        }
        that.accelerate();
    }

    that.setPower = function(aPower) {
        var propUnits = that.getPropUnits();
        for (var i = 0; i < propUnits.length; i++) {
            propUnits[i].setPower(aPower);
        }
        that.accelerate();
    }

    that.getPower = function() {
        var power = 0;
        var propUnits = that.getPropUnits();
        for (var i = 0; i < propUnits.length; i++) {
            power += propUnits[i].getPower();
        }
        return power;
    }

    that.getAfterBurner = function() {
        return that.getPropUnits()[0].getAfterBurner();
    }

    return that;
}

function WaterVehicle(anAmountOfPropellers, aFinsPerPropeller) {
    var that = Vehicle();

    initialice(anAmountOfPropellers, aFinsPerPropeller);

    function initialice(anAmountOfPropellers, aFinsPerPropeller) {
        var propUnits = that.getPropUnits();
        for (var i = 0; i < anAmountOfPropellers; i++) {
            that.addPropUnit(
                new Propeller(aFinsPerPropeller)
                );
        }
    }

    that.directionCounterClockwise = function() {
        var propUnits = that.getPropUnits();
        for (var i = 0; i < propUnits.length; i++) {
            propUnits[i].directionCounterClockwise();
        }
        that.accelerate();
    }

    that.directionClockwise = function() {
        var propUnits = that.getPropUnits();
        for (var i = 0; i < propUnits.length; i++) {
            propUnits[i].directionClockwise();
        }
        that.accelerate();
    }

    return that;
}

function AmphibiousVehicle(amountOfPropellers, finsPerPropeller, wheelsRadius) {
    var modes = {};
    var mode = undefined;

    initialice(amountOfPropellers, finsPerPropeller, wheelsRadius);

    function initialice(amountOfPropellers, finsPerPropeller, wheelsRadius) {
        modes["water"] = {
            name : "water",
            obj : new WaterVehicle(amountOfPropellers, finsPerPropeller),
        };
        modes["land"] = {
            name : "land",
            obj : new LandVehicle(wheelsRadius),
        };
        mode = modes["water"];
    }

    function getSpeed() {
        return mode.obj.getSpeed();
    }

    function switchLand() {
        mode.obj.stop();
        mode = modes["land"];
    }

    function switchWater() {
        mode.obj.stop();
        mode = modes["water"];
    }

    function accelerate() {
        mode.obj.accelerate();
    }

    return {
        getSpeed : getSpeed,
        switchLand : switchLand,
        switchWater : switchWater,
        accelerate : accelerate,
    };
}
