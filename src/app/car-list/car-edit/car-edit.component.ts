import {NgForm } from '@angular/forms';
import { Car } from '../../Models/Car.model';
import { Component, OnInit} from '@angular/core';
import CarService from '../../service/car.service';

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
    const newCar = new Car(value.id,value.name, value.price,value.numberOfSeats,value._owner);
    this.carService.addCar(newCar);
  }
  onDeletecar(ele:number){
    this.carService.deleteCar(ele);
}

}
