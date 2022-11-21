import { Truck } from './../../Models/Truck.model';
import { Component, OnInit  } from '@angular/core';
import TruckService from '../truck.sevice';
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

  onAddItem(form:NgForm) {
    // const ingId= this.idInputRef.nativeElement.value;
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingPrice = this.priceInputRef.nativeElement.value;
    // const ingnbr = this.trailerWeightInputRef.nativeElement.value;
    // const ingOwner = this.ownerInputRef.nativeElement.value;
    const value=form.value;
    const newtruck = new Truck(value.id,value.name, value.price,value.trailerWeight,value.owner);
    this.truckService.addTruck(newtruck);
  }

}
