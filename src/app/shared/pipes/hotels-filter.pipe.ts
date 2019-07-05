import { Pipe, PipeTransform } from '@angular/core';
import {IHotel} from '../interfaces/hotel.interface'

@Pipe({
  name: 'hotelsFilter'
})
export class HotelsFilterPipe implements PipeTransform {

  public transform(hotels: IHotel[]): string[] {
    return [...new Set(hotels.map(hotel => hotel.type))];
  }

}
