import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts.component';
import { FormsModule } from '@angular/forms';
import { RacingDataService } from './racing-data.service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, CarPartsComponent],
    providers: [RacingDataService],
    bootstrap: [AppComponent]
})
class AppModule { }

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);