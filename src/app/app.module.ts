import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterComponent } from './filter/filter.component';
import { CountryComponent } from './country/country.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FilterComponent,
    CountryComponent,
    HeaderFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
