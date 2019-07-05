import {Component, OnInit, Input} from '@angular/core';
import {IHotel} from '../../shared/interfaces/hotel.interface'

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {

  @Input() public hotel: IHotel;

  constructor() {}
  ngOnInit() {}

}
