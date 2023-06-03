"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    get getMake() {
        return this.make;
    }
    get getModel() {
        return this.model;
    }
    get getYear() {
        return this.year;
    }
    get getRented() {
        return this.rented;
    }
    setRent(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented == true) {
            console.log(`${this.getMake} ${this.getModel} is rented You have to wait`);
        }
        else if (this.rented == false) {
            console.log(`${this.getMake} ${this.getModel} is not rented `);
        }
    }
    return() {
        if (this.rented == true) {
            this.setRent(false);
            console.log(`returning back ${this.getMake} ${this.getModel}`);
        }
        else if (this.rented == false) {
            console.log(`${this.getMake} ${this.getModel} has not been returned`);
        }
    }
}
class Car extends Vehicle {
    constructor(model, make, year, rented, color) {
        super(model, make, year, rented);
        this.color = color;
    }
    rentalRate() {
        return 20000;
    }
    get getColor() {
        return this.color;
    }
}
class MotorCycle extends Vehicle {
    constructor(model, make, year, rented, color) {
        super(model, make, year, rented);
        this.color = color;
    }
    rentalRate() {
        return 1000;
    }
    get getColor() {
        return this.color;
    }
}
class Truck extends Vehicle {
    constructor(model, make, year, rented, LoadSizeMaximum) {
        super(model, make, year, rented);
        this.LoadSizeMaximum = LoadSizeMaximum;
    }
    rentalRate() {
        return 80000;
    }
    get getLoadSizeMaximum() {
        return this.LoadSizeMaximum;
    }
}
const car = new Car("Toyota", "hilux", 2010, false, "black");
car.rent();
car.return();
const truck = new Truck("Ford", "3232", 2012, true, 20000);
truck.rent();
truck.return();
const motorcycle = new MotorCycle("unique", "cd70", 2017, true, "blue");
motorcycle.rent();
motorcycle.return();
//# sourceMappingURL=app.js.map