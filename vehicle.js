class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

//extending Vehicle class properties for step 6.  It does not like the class name I made Sedan Details? I'm missing something.

 
accelerate() {
    if (this.started) {
        if (this.fuel > 0) {
            console.log(this.speed += 1);
            this.fuel = this.fuel - 1;
        } else {
            console.log("out of fuel.");
            this.stop();
        }
    } else {
        alert("You need to start the engine first.");
    }
}
//this would work correctly.  

decelerate() {
    if (this.started) {
        if (this.fuel > 0) {
            if (this.speed > 0) {
                console.log(this.speed -= 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log(this + " has stopped moving");
                this.fuel = this.fuel - 1;
            }
        } else {
            console.log("out of fuel.");
            this.stop();
        }
    } else {
        alert("You need to start the engine first.");
    }
}
//will stop the function from working.
stop() {
    console.log('engine off')
    this.started = false;
}

typeOfVehicle() {
    if (this.numberOfWheels == 8) {
        console.log(this.model + " " + this.make + " is a Truck");
    } else if (this.numberOfWheels == 4) {
        console.log(this.model + " " + this.make + " is a Car");
    } else if (this.numberOfWheels == 2) {
        console.log(this.model + " " + this.make + " is a Bike");
    } else {
        console.log("Unknown type of vehicle");
    }
}
}

//This exports things you want to use from this "module", more info in readme
module.exports = { Vehicle }