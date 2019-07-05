import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IHotel} from '../shared/interfaces/hotel.interface'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() public hotels: IHotel[];
  @Output() public currentHotel = new EventEmitter<IHotel>();

  public hotel: IHotel;
  public selectedHotelType: string;

  constructor() {}

  ngOnInit() {
    this.currentHotel.emit(this.hotels[0]);
    this.hotel = this.hotels[0];
  }

  public selectType(hotelType: string): void {
    this.selectedHotelType = hotelType;
    const filteredHotels = this.hotels.filter(x => x.type === this.selectedHotelType);
    this.currentHotel.emit(filteredHotels[0]);
    this.hotel = filteredHotels[0];
  }

  public selectHotel(hotel: IHotel): void {
    this.currentHotel.emit(hotel);
    this.hotel = hotel;
  }

}



























// export class MainComponent implements OnInit {
//
//   @Input() public hotels: IHotel[]; приходит массив отелей от главного компонента
//   @Output() public currentHotel = new EventEmitter<IHotel>();
//
//
//   public hotel: IHotel; //переменная нужна только для отображения {{hotel.img}} в main компоненте
//   public selectedHotelType: string;
//
//
//   constructor() {
//   }
//
//   ngOnInit() {
//     this.currentHotel.emit(this.hotels[0]); при onInit main comp передаем первый элеммент отелей для оторбажения инфы в social / weather
//     this.hotel = this.hotels[0]; //устанавливаем картинку при инициализации в main.comp
//   }
//
//   public selectType(hotelType: string): void {
//     this.selectedHotelType = hotelType; //записываем выбранный тип отеля (five* / four * / itc...)
//     const filteredHotels = this.hotels.filter(x => x.type === this.selectedHotelType); // фильтруем отели по типу
//     this.currentHotel.emit(filteredHotels[0]); //передаем 1й элемент массива отфильтрованных отелей для social / weather
//     this.hotel = filteredHotels[0]; //устанавливаем картинку в main comp при клике выбора типа
//   }
//
//   public selectHotel(hotel: IHotel): void {
//     this.currentHotel.emit(hotel); //передаем выбранный отель для отображения в social / weather
//     this.hotel = hotel; //устанавливаем картинку в main.comp выбранного отеля
//   }

//}
