// Angular imports
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// PrimeNG imports
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
// Local imports
import {Country} from '../../model/country';
import {CountryService} from '../../service/country.service';
import {CountrySaveModalComponent} from '../country-save-modal/country-save-modal.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: Country[];
  selectedCountry: Country;
  searchText: string = '';
  constructor(private countryService: CountryService, private router: Router, private primengConfig: PrimeNGConfig, private messageService: MessageService, public dialogService: DialogService) {
  }

  ngOnInit() {
    this.countryService.getAll().subscribe(data => this.countries = data);
    this.primengConfig.ripple = true;
  }

  onRowSelect($event: any) {
    const ref = this.openModal($event.data, 'Edit country');
    ref.onClose.subscribe((country: Country) => {
      if (country) {
        this.countryService.update(country.id, country).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Country updated'});
        });
      }
    });
    this.refresh();
  }

  deleteCountry(country: Country) {
    this.countryService.delete(country.id).subscribe(() => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Country deleted'});
    });
    this.refresh();
  }

  openCreateModal() {
    const ref = this.openModal(new Country(), 'Add country');
    ref.onClose.subscribe((country: Country) => {
      if (country) {
        this.countryService.create(country).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Country created'});
        });
      }
    });
    
  }

  openEditModal(selectedCountry: Country) {
    const ref = this.openModal(selectedCountry, 'Edit country');
    ref.onClose.subscribe((country: Country) => {
      if (country) {
        this.countryService.update(country.id, country).subscribe(() => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Country updated'});
        });
      }
    });
   this.refresh();
  }

  openModal(country: Country, header: string): DynamicDialogRef {
    return this.dialogService.open(CountrySaveModalComponent, {
      data: {country},
      header,
      contentStyle: {'max-height': '500px', 'overflow': 'auto'},
      baseZIndex: 10000
    });
  }
  avatarOptions = [
    { label: 'Avatar 1', value: 'assets/avatars/avatar1.png' },
    { label: 'Avatar 2', value: 'assets/avatars/avatar2.png' },
    { label: 'Avatar 3', value: 'assets/avatars/avatar3.png' },
    // Add more avatar options with the complete path
  ];


  refresh(){
    const timer$ = timer(10000);
    timer$.subscribe(() => {
      this.ngOnInit();
    });
  }
  
}
