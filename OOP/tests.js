function fail(owner, stage, motive) {
    document.write("<div style='color: red; font-weight: bold;'>" + owner + " | Fail on: " + stage + " | " + motive + "</div><br />");
    throw new Error("Execution Aborted");
}

function done(owner, stage) {
    document.write("<div style='color: green; font-weight: bold;'>" + owner + " | Done: " + stage + "</div><br />");
}
 /**
  * Creation Tests - Prop Units
  */

//
//A new wheel should have radius 0 and 0 acceleration
//

try {
    var wheel = Wheel();
    done("Wheel", "create Wheel");
} catch(err) {
    fail("Wheel", "create Wheel", "Wheel class not defined");
}
if (wheel.getAcceleration() !== 0) {
    fail("Wheel", "Initial acceleration", "acceleration should be 0, was " + wheel.getAcceleration());
} else {
    done("Wheel", "Initial acceleration");
}

wheel.setRadius(10);

//With radius 10, acceleration should be 62.83185307179586

if (wheel.getAcceleration() !== 62.83185307179586) {
    fail("Wheel", "Acceleration amount", "Acceleration amount should be 62.83185307179586, was: " + vehicle.getSpeed());
} else {
    done("Wheel", "Acceleration amount");
}

//
//A new propelling nozzle should have power 0 and off afterburner
//

try {
    var nozzle = PropellingNozzle();
    done("PropellingNozzle", "create PropellingNozzle");
} catch(err) {
    fail("PropellingNozzle", "create PropellingNozzle", "PropellingNozzle class not defined");
}

try {
    if (nozzle.getPower() !== 0) {
        fail("PropellingNozzle", "Initial Power", "Power should be 0, was " + nozzle.getPower());
    } else {
        done("PropellingNozzle", "Initial Power");
    }

    if (nozzle.getAfterBurner() !== false) {
        fail("PropellingNozzle", "Initial AfterBurner", "AfterBurner should be false, was " + nozzle.getAfterBurner());
    } else {
        done("PropellingNozzle", "Initial AfterBurner");
    }


    if (nozzle.getAcceleration() !== 0) {
        fail("PropellingNozzle", "Initial acceleration", "acceleration should be 0, was " + nozzle.getAcceleration());
    } else {
        done("PropellingNozzle", "Initial acceleration");
    }

    nozzle.setPower(10);


    //With power 10, acceleration should be 10

    if (nozzle.getAcceleration() !== 10) {
        fail("PropellingNozzle", "Acceleration amount Power: 10, AfterBurner: Off", "Acceleration amount should be 10, was: " + nozzle.getAcceleration());
    } else {
        done("PropellingNozzle", "Acceleration amount Power: 10, AfterBurner: Off");
    }

    nozzle.afterBurnerON();

    //With power 10 and afterburner ON, acceleration should be 20

    if (nozzle.getAcceleration() !== 20) {
        fail("PropellingNozzle", "Acceleration amount Power: 10, AfterBurner: ON", "Acceleration amount should be 20, was: " + nozzle.getAcceleration());
    } else {
        done("PropellingNozzle", "Acceleration amount Power: 10, AfterBurner: ON");
    }

    nozzle.afterBurnerOFF();

    //With power 10 and afterburner OFF, acceleration should be 10

    if (nozzle.getAcceleration() !== 10) {
        fail("PropellingNozzle", "Acceleration amount Power: 10, AfterBurner back to OFF", "Acceleration amount should be 10, was: " + nozzle.getAcceleration());
    } else {
        done("PropellingNozzle", "Acceleration amount Power: 10, AfterBurner back to OFF");
    }

} catch(err) {
    fail("PropellingNozzle", "General Fail", err);
}

//
//A new Propeller should have 0 fins and been in clockwise direction
//

try {
    var propeller = Propeller();
    done("Propeller", "create Propeller");
} catch(err) {
    fail("Propeller", "create Propeller", "Propeller class not defined");
}

try {
    if (propeller.getFins() !== 0) {
        fail("Propeller", "Initial Fins", "Fins should be 0, was " + propeller.getFins());
    } else {
        done("Propeller", "Initial Fins");
    }

    if (propeller.getDirection() !== "clockwise") {
        fail("Propeller", "Initial Direction", "Direction should be clockwise, was " + propeller.getDirection());
    } else {
        done("Propeller", "Initial Direction");
    }


    if (propeller.getAcceleration() !== 0) {
        fail("Propeller", "Initial acceleration", "acceleration should be 0, was " + propeller.getAcceleration());
    } else {
        done("Propeller", "Initial acceleration");
    }

    propeller.setFins(10);


    //With 10 fins and clockwise direction acceleration should be 10

    if (propeller.getAcceleration() !== 10) {
        fail("Propeller", "Acceleration fins: 10, direction: clockwise", "Acceleration amount should be 10, was: " + propeller.getAcceleration());
    } else {
        done("Propeller", "Acceleration fins: 10, direction: clockwise");
    }

    propeller.directionCounterClockwise();

    //With 10 fins and counter-clockwise direction acceleration should be -10

    if (propeller.getAcceleration() !== -10) {
        fail("Propeller", "Acceleration fins: 10, direction: counter-clockwise", "Acceleration amount should be -10, was: " + propeller.getAcceleration());
    } else {
        done("Propeller", "Acceleration fins: 10, direction: clockwise");
    }

    propeller.setFins(0)

    //With 0 fins and counter-clockwise direction acceleration should be 0

    if (propeller.getAcceleration() !== 0) {
        fail("Propeller", "Acceleration fins: 0, direction: counter-clockwise", "Acceleration amount should be 0, was: " + propeller.getAcceleration());
    } else {
        done("Propeller", "Acceleration fins: 10, direction: counter-clockwise");
    }

    propeller.directionClockwise();

    //With 0 fins and clockwise direction acceleration should be 0

    if (propeller.getAcceleration() !== 0) {
        fail("Propeller", "Acceleration fins: 0, direction: clockwise", "Acceleration amount should be 0, was: " + propeller.getAcceleration());
    } else {
        done("Propeller", "Acceleration fins: 10, direction: clockwise");
    }

} catch(err) {
    fail("Propeller", "General Fail", err);
}


//
//A new vehicle, should have speed 0 at the beginning and 0 propUnits
//

try {
    var vehicle = Vehicle();
    done("Vehicle", "create Vehicle");
} catch(err) {
    fail("Vehicle", "create Vehicle", "vechicle class not defined");
}
if (vehicle.getSpeed() !== 0) {
    fail("Vehicle", "Initial Speed", "speed should be 0, was " + vehicle.getSpeed());
} else {
    done("Vehicle", "Initial Speed");
}

if (vehicle.getPropUnits().length !== 0) {
    fail("Vehicle", "Initial PropUnits amount", "PropUnits amount should be 0, was: " + vehicle.getSpeed());
} else {
    done("Vehicle", "Initial PropUnits amount");
}

//
//  A new Land Vehicle should have 4 weels.
//

try {
    var land = LandVehicle(4); // parameter radius of wheels
    done("LandVehicle", "create LandVehicle");
} catch(err) {
    fail("LandVehicle", "create LandVehicle", "LandVehicle class not defined");
}
try {
    //Land should have 4 wheels
    if (land.getPropUnits().length !== 4) {
        fail("LandVehicle", "Initial wheels amount", "wheels amount should be 4, was: " + land.getSpeed());
    } else {
        done("LandVehicle", "Initial wheels amount");
    }
    //Having wheels with radius of 4, speed should be (2*4*PI) * 4 wheels -> 100.53096491487338

    land.accelerate();

    if (land.getSpeed() !== 100.53096491487338) {
        fail("LandVehicle", "Initial Speed", "speed should be 100.53096491487338, was " + land.getSpeed());
    } else {
        done("LandVehicle", "Initial Speed");
    }
} catch(err) {
    fail("LandVehicle", "General Fail", err);
}

//
//  An new AirVehicle should have 1 propelling nozzle.
//

try {
    var air = AirVehicle(150); //parameter, power of the propelling nozzle
    done("AirVehicle", "create AirVehicle");
} catch(err) {
    fail("AirVehicle", "create AirVehicle", "AirVehicle class not defined");
}
try {
    //Air should have 1 propelling nozzle
    if (air.getPropUnits().length !== 1) {
        fail("AirVehicle", "Initial propelling nozzle amount", "propelling nozzle amount should be 1, was: " + air.getSpeed());
    } else {
        done("AirVehicle", "Initial propelling nozzle amount");
    }

    //Initial speed

    if (air.getSpeed() !== 0) {
        fail("AirVehicle", "Initial Speed", "speed should be 0, was " + air.getSpeed());
    } else {
        done("AirVehicle", "Initial Speed");
    }

    //With default afterburners off and 150 of power, the speed should be 150.

    air.accelerate();

    if (air.getSpeed() !== 150) {
        fail("AirVehicle", "Speed afterburners off and 150 of power", "speed should be 150, was " + air.getSpeed());
    } else {
        done("AirVehicle", "Speed afterburners off and 150 of power");
    }

    //With afterburners on and 150 of power, speed should be 300.

    air.afterBurnersON();

    if (air.getSpeed() !== 300) {
        fail("AirVehicle", "Speed afterburners on and 150 of power", "speed should be 300, was " + air.getSpeed());
    } else {
        done("AirVehicle", "Speed afterburners on and 150 of power");
    }

    //With afterburners off and 0 of power, speed should be 0.

    air.afterBurnersOFF();
    air.setPower(0);

    if (air.getSpeed() !== 0) {
        fail("AirVehicle", "Speed afterburners off and 0 of power", "speed should be 0, was " + air.getSpeed());
    } else {
        done("AirVehicle", "Speed afterburners off and 0 of power");
    }

} catch(err) {
    fail("AirVehicle", "General Fail", err);
}


//
//  A new WaterVehicle should have X propelling nozzle.
//

var amountOfPropellers = 34;
var finsPerPropeller = 10;

try {
    var water = WaterVehicle(amountOfPropellers, finsPerPropeller);
    done("WaterVehicle", "create WaterVehicle");
} catch(err) {
    fail("WaterVehicle", "create WaterVehicle", "WaterVehicle class not defined");
}
try {
    //water should have amountOfPropellers propellers
    if (water.getPropUnits().length !== amountOfPropellers) {
        fail("WaterVehicle", "Initial propelling nozzle amount", "propelling nozzle amount should be " + amountOfPropellers + ", was: " + water.getSpeed());
    } else {
        done("WaterVehicle", "Initial propelling nozzle amount");
    }

    //Initial speed

    if (water.getSpeed() !== 0) {
        fail("WaterVehicle", "Initial Speed", "speed should be 0, was " + water.getSpeed());
    } else {
        done("WaterVehicle", "Initial Speed");
    }

    //With amountOfPropellers and  finsPerPropeller and a default direction of clockwise, the speed should be 340.

    water.accelerate();

    if (water.getSpeed() !== 340) {
        fail("WaterVehicle", "Speed amountOfPropellers and  finsPerPropeller and a default direction of clockwise", "speed should be 340, was " + water.getSpeed());
    } else {
        done("WaterVehicle", "Speed amountOfPropellers and  finsPerPropeller and a default direction of clockwise");
    }

    //With directionCounterClockwise , speed should be -340.

    water.directionCounterClockwise();

    if (water.getSpeed() !== -340) {
        fail("WaterVehicle", "Speed directionCounterClockwise", "speed should be -340, was " + water.getSpeed());
    } else {
        done("WaterVehicle", "Speed directionCounterClockwise");
    }

    //With directionClockwise , speed should be 340.

    water.directionClockwise();

    if (water.getSpeed() !== 340) {
        fail("WaterVehicle", "Speed directionClockwise", "speed should be 340, was " + water.getSpeed());
    } else {
        done("WaterVehicle", "Speed directionClockwise");
    }


} catch(err) {
    fail("WaterVehicle", "General Fail", err);
}

//
//  Amphibious Vehicle should change its mode (water and land) and
//

var amountOfPropellers = 10;
var finsPerPropeller = 10;
var wheelsRadius = 6;

try {
    var amphi = AmphibiousVehicle(
        amountOfPropellers,
        finsPerPropeller,
        wheelsRadius
        );
    done("AmphibiousVehicle", "create AmphibiousVehicle");
} catch(err) {
    fail("AmphibiousVehicle", "create AmphibiousVehicle", "AmphibiousVehicle class not defined" + err);
}
try {
    if (amphi.getSpeed() !== 0) {
        fail("WaterVehicle", "Initial Speed", "speed should be 0, was " + amphi.getSpeed());
    } else {
        done("WaterVehicle", "Initial Speed");
    }

    //In land mode, speed should be 37.69911184307752

    // Switch to land mode
    amphi.switchLand();

    amphi.accelerate();

    if (amphi.getSpeed() !== 150.79644737231007) {
        fail("WaterVehicle", "Initial land mode", "speed should be 150.79644737231007, was " + amphi.getSpeed());
    } else {
        done("WaterVehicle", "Initial land mode");
    }

    //In Water mode, speed should be 100

    amphi.switchWater();

    amphi.accelerate();

    if (amphi.getSpeed() !== 100) {
        fail("WaterVehicle", "Initial Speed", "speed should be 100, was " + amphi.getSpeed());
    } else {
        done("WaterVehicle", "Initial Speed");
    }

} catch(err) {
    fail("AmphibiousVehicle", "General error", err);
}
