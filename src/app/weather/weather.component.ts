import {Component, OnInit, Input} from '@angular/core';
import {IHotel} from '../shared/interfaces/hotel.interface'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() hotel: IHotel;

  ngOnInit() {}
}
