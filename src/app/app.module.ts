import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegionComponent } from './region/region.component';
import { FilterPipe } from './pipe';

const appRoutes: Routes = [
  {
    path: 'countries',
    component: CountriesComponent,
    data: { title: 'Countries List' }
  },
  {
    path: 'country/:name',
    component: CountryComponent,
    data: { title: 'Country' }
  },
  {
    path: 'region/:name',
    component: RegionComponent,
    data: { title: 'Region' }
  },
  { path: '',
    redirectTo: '/countries',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    RegionComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
