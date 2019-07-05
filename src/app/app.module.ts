import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { MainComponent } from './main/main.component';
import { HotelsFilterPipe } from './shared/pipes/hotels-filter.pipe';
import { HotelItemComponent } from './main/hotel-item/hotel-item.component';
import { HotelDetailPipe } from './shared/pipes/hotel-detail.pipe';
import { FormatPhonePipe } from './shared/pipes/format-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialComponent,
    MainComponent,
    HotelsFilterPipe,
    HotelItemComponent,
    HotelDetailPipe,
    FormatPhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
