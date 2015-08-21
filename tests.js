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




//A new vehicle, should have speed 0 at the beginning and 0 propUnits
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