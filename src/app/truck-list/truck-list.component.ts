import { Truck } from './../Models/Truck.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import TruckService from '../service/truck.sevice';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent implements OnInit,OnDestroy {
  public trucks : Truck[] = [];
    
    
      constructor(private trukService:TruckService) {  }
    
      ngOnInit(): void {
        this.trucks=this.trukService.getTrucks();
        this.trukService.trucksChanged.subscribe(
          (trucks:Truck[])=>{
            this.trucks=trucks;
          }
        )
      }
      onDeletecar(id:number){
    
        this.trukService.deleteTruck(id);
    }
    ngOnDestroy(): void {
      this.trukService.trucksChanged.unsubscribe();
    }
}
