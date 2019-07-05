import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {IHotel} from './shared/interfaces/hotel.interface'
import {Observable} from "rxjs";
import {hotels$} from './shared/mock'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  public hotels: Observable<IHotel[]>;
  public sendCurHotel: IHotel;


  constructor() {}

  public ngOnInit(): void {
    this.hotels = hotels$;
  }

  currentHotel(hotel: IHotel){
    this.sendCurHotel = hotel;
  }

}

