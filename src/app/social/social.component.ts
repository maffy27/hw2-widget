import {Component, OnInit, Input} from '@angular/core';
import {IHotel} from '../shared/interfaces/hotel.interface'

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input() public hotel: IHotel;

  constructor() {}

  ngOnInit() {}
}
