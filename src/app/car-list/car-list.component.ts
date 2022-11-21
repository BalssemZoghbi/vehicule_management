import { Car } from '../Models/Car.model';
import { Component, OnInit } from '@angular/core';
import CarService from './car.service';
// import { Subscription } from 'rxjs';
@Component({
  selector: 'app-car',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  public cars : Car[] = [];
// private subscription!:Subscription;

  constructor(private carService:CarService) {  }

  ngOnInit(): void {
  this.cars=this.carService.getCars();
    this.carService.carsChanged.subscribe(
      (cars:Car[])=>{
        this.cars=cars;
      }
    )
  }
// ngOnDestroy(): void {
//   this.subscription.unsubscribe();
// }
// onDeletecar(car:any){
//   this.carService.deleteCar(car.id).subscribe(
//     ()=>{
//       alert("deleted");
//     }
//   )
  
// }
}
