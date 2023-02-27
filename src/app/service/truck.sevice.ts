import { BehaviorSubject } from 'rxjs';
import { Truck } from '../Models/Truck.model';

export default class TruckService {

  private truks: Truck[] = [new Truck(1, 'isuzu', 7700000, 443, 'Balssem')];
  trucksChanged = new BehaviorSubject<Truck[]>(this.truks);

  /**
   *
   *  @type {Array}
   */
  getTrucks() {
    return this.trucksChanged.value;
  }

  /**
   *
   * @param truck
   */
  public addTruck(truck: Truck) {
    this.truks.push(truck);
    this.trucksChanged.next(this.truks);
  }
  /**
   *
   * @param truck
   */

  public updateTruck = async (truck: Truck): Promise<void> => {
    let index = this.truks.findIndex((d) => d.id === truck['id']);
    this.truks[index] = truck;
  };
  /**
   *
   * @param id
   */
  public deleteTruck(id: number) {
    let index = this.truks.findIndex((d) => d.id === id);
    this.truks.splice(index, 1);
  }
}
