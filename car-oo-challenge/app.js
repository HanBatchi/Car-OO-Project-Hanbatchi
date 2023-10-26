class Vehicle{
  constructor(make,model, year){
    if(!Number.isInteger(year) || year < 1900 || year > 2023)
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk(){
    return "Beep";
  }
  toString(){
    return(`The vehicle is a ${this.make}, ${this.model} from ${this.year}.`);
  }
}
class Car extends Vehicle {
  constructor(make,model,year,color){
    super(make,model,year);
  }
  numWheels(){
    return 4;
  }
}
class Motorcycle extends Vehicle {
  constructor(make,model,year){
    super(make,model,year);
  }
  numWheels(){
    return 2;
  }
  revEngine(){
    return("VROMM!!!")
  }
}
class Garage {
  constructor(capacity){
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(newVehicle){
    if(!(newVehicle instanceof Vehicle)) {
      throw new Error("Only vehicles are allowed in here!");
    }
    if(this.vehicles.length >= this.capacity){
      throw new Error("Sorry, we're full");
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}
