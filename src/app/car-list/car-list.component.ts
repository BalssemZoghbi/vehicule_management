import { Car } from '../Models/Car.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import CarService from '../service/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit,OnDestroy {
  public cars : Car[] = [];

  constructor(private carService:CarService) {  }

  ngOnInit(): void {
  this.cars=this.carService.getCars();
    this.carService.carsChanged.subscribe(
      (cars:Car[])=>{
        this.cars=cars;
      }
    )
    
  }
  onDeletecar(id:number){
    
    this.carService.deleteCar(id);
}
ngOnDestroy(): void {
  this.carService.carsChanged.unsubscribe();
}

}
