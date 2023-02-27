import { Car } from "../Models/Car.model";
import { BehaviorSubject, Subject } from 'rxjs';
export default class CarService {
    private cars : Car[] =
    [
        new Car(1,"porche",2400000,3,"Balssem"),
        new Car(2,"porche",4000000,3,"Folen")
    ];
    carsChanged=new BehaviorSubject<Car[]>(this.cars);
  

  /**
   * 
   *  @type {Array}
   */
   getCars(){
    
    return this.carsChanged.value;
  }
   /**
  * addCar
  * @param car 
  */
  addCar(car:Car){
    this.cars.push(car);
    this.carsChanged.next(this.cars);
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
   this.carsChanged.next(this.cars);
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
