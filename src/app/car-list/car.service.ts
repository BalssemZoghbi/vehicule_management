import { EventEmitter } from '@angular/core';
import { Car } from "../Models/Car.model";
import { Subject } from 'rxjs';
export default class CarService {
    carsChanged=new Subject<Car[]>();
    private cars : Car[] =
    [
        new Car(1,"porche",2400000,3,"Balssem"),
        new Car(2,"porche",4000000,3,"Folen")
    ];

  

  /**
   * 
   *  @type {Array}
   */
   getCars(){
    return this.cars.slice();
  }
   /**
  * addCar
  * @param car 
  */
  addCar(car:Car){
    this.cars.push(car);
    this.carsChanged.next(this.cars.slice());
  }

 
/**
 * updateCars
 * @param car 
 * 
 */
 public updateCars = async (car:Car): Promise<void> => { 
    let index = this.cars.findIndex(d => d.id === car['id']);
    if(index >0 || index==0)
   {
    this.cars[index]['name'] = car['name'];
    this.cars[index]['price'] = car['price'];
    this.cars[index]['numberOfSeats'] = car['numberOfSeats'];

   }
}
/**
 * deleteCar
 * @param id 
 */
  public deleteCar(id: number) {
    let index = this.cars.findIndex(d => d.id === id);
    this.cars.splice(index, 1);
  }

}
