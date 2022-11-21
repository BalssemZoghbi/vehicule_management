import { FormArray, NgForm } from '@angular/forms';
import { Car } from '../../Models/Car.model';
import { Component, OnInit} from '@angular/core';
import CarService from '../car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {


  constructor(private carService:CarService) { 
  }

  ngOnInit() {
  }

  onAddItem(form:NgForm) {
    const value=form.value;
    const newCar = new Car(value.id,value.name, value.price,value.numberOfSeats,value.owner);
    this.carService.addCar(newCar);
  }
  // onDeletecar(ele:number){
  //   this.carService.deleteCar(ele);

// this.cars.forEach((value: number,index: any)=>{
// if(value==ele)
// this.cars.splice(index,1);
// });
// }

}
