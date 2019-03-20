'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

const VehicleClass = require('./vehicle-class.js');

const mazdaViaClass = new VehicleClass.Car('Mazda 3');
console.log(mazdaViaClass, mazdaViaClass.drive(),mazdaViaClass.stop());

const harleyViaClass = new VehicleClass.Motorcycle('Harley');
console.log(harleyViaClass, harleyViaClass.wheelie(), harleyViaClass.stop());

// Implement a car and motorcycle using a Factory
const VehicleFactory = require('./vehicle-factory');

const  mazdaViaFactory = new VehicleFactory.Car('Mazda 3');
console.log(mazdaViaFactory, mazdaViaFactory.drive(), mazdaViaFactory.stop());

const harleyViaFactory= new VehicleFactory.Motorcycle('Harley');
console.log(harleyViaFactory, harleyViaFactory.wheelie(), harleyViaFactory.stop());