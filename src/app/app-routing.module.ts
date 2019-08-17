import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { RegionComponent } from './region/region.component';

const appRoutes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: 'country',        component: CountryComponent },
  { path: 'region',        component: RegionComponent },
  { path: '',   redirectTo: '/countries', pathMatch: 'full' },
  { path: '**', component: Error }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
