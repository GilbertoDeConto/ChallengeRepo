import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries:any = [];
  region:any = []

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.countries = [];
    this.rest.getCountries().subscribe((data: {}) => {
      console.log(data);
      this.countries = data;
    });
  }
}