import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {

  @Input() country: Country;
  @Output() editCountry = new EventEmitter<Country>();
  @Output() deleteCountry = new EventEmitter<Country>();

  openEditModal(country: Country) {
    this.editCountry.emit(country);
  }
  // getImagePath(avatar: string): string {
  //   return '../../assets/avatars/' + avatar;
  // }  

  //  a:string= '../../assets/avatars/avatar1.jpg'
}
