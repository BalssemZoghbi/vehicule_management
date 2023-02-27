import { Truck } from './../../Models/Truck.model';
import { Component, OnInit  } from '@angular/core';
import TruckService from '../../service/truck.sevice';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-truck-edit',
  templateUrl: './truck-edit.component.html',
  styleUrls: ['./truck-edit.component.css']
})
export class TruckEditComponent implements OnInit {

  // @ViewChild('idInput', { static: false })
  // idInputRef!: ElementRef;
  // @ViewChild('nameInput', { static: false })
  // nameInputRef!: ElementRef;
  // @ViewChild('priceInput', { static: false })
  // priceInputRef!: ElementRef;
  // @ViewChild('trailerWeightInput', { static: false })
  // trailerWeightInputRef!: ElementRef;
  // @ViewChild('ownerInput', { static: false })
  // ownerInputRef!: ElementRef;

  constructor(private truckService:TruckService) { }

  ngOnInit() {
  }
/**
 * 
 * @param form 
 */
  onAddItem(form:NgForm) {
    const value=form.value;
    const newtruck = new Truck(value.id,value.name, value.price,value.trailerWeight,value._owner);
    this.truckService.addTruck(newtruck);
  }
  onDeletecar(ele:number){
    this.truckService.deleteTruck(ele);
}
}
