abstract class Vehicle {
    make: string;
    model: string;
    year: number;
    rented: boolean
    constructor(make: string, model: string, year: number, rented: boolean) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented
    }
    get getMake() {
        return this.make
    }
    get getModel() {
        return this.model
    }
    get getYear() {
        return this.year
    }
    get getRented() {
        return this.rented
    }
    setRent(rented: boolean): void {
        this.rented = rented;
    }
    abstract rentalRate(): number

    rent(): void {
        if (this.rented == true) {
            console.log(`${this.getMake} ${this.getModel} is rented You have to wait`)
        }
        else if (this.rented == false) {
            console.log(`${this.getMake} ${this.getModel} is not rented `)
        }
    }
    return(): void {
        if (this.rented == true) {
            this.setRent(false)
            console.log(`returning back ${this.getMake} ${this.getModel}`)
        }

        else if (this.rented == false) {
            console.log(`${this.getMake} ${this.getModel} has not been returned`)
        }
    }
}
class Car extends Vehicle {
    private color: string;

    constructor(model: string, make: string, year: number, rented: boolean, color: string) {
        super(model, make, year, rented)
        this.color = color
    }

    rentalRate(): number {
        return 20000;
    }

    get getColor() {
        return this.color
    }
}


class MotorCycle extends Vehicle {
    public color: string;

    constructor(model: string, make: string, year: number, rented: boolean, color: string) {
        super(model, make, year, rented)
        this.color = color
    }

    rentalRate(): number {
        return 1000;
    }

    get getColor() {
        return this.color
    }

}

class Truck extends Vehicle {
    public LoadSizeMaximum: number;

    constructor(model: string, make: string, year: number, rented: boolean, LoadSizeMaximum: number) {
        super(model, make, year, rented)
        this.LoadSizeMaximum = LoadSizeMaximum
    }

    rentalRate(): number {
        return 80000;
    }

    get getLoadSizeMaximum() {
        return this.LoadSizeMaximum
    }

}

const car = new Car("Toyota", "hilux", 2010, false, "black")
car.rent()
car.return()

const truck = new Truck("Ford", "3232", 2012, true, 20000)
truck.rent()
truck.return()

const motorcycle = new MotorCycle("unique", "cd70", 2017, true, "blue")
motorcycle.rent()
motorcycle.return()


