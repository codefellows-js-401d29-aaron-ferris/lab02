
'use strict';

const Vehicle = function (name, wheels){
  this.name = name;
  this.wheels = wheels;
  this.drive = () => {
    return 'Moving Forward';
  }
  this.stop = () => {
    return 'Stopping';
  }
};

function CarFactory(name) {
  let car = Object.assign(
    {},
    {name},
    {wheels: 4},
    Vehicle()
  );
  return Object.freeze(car)
}

function MotorcycleFactory(name) {
  let motorcycle = Object.assign(
    {},
    {name},
    {wheels: 2},
    {wheelie},
    Vehicle()
  );
  function wheelie(){
    return 'Wheee!';
  }

  return Object.freeze(motorcycle)

}

module.exports = {CarFactory, MotorcycleFactory};