import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StatusHistoryComponent } from './pots/pot-detail/statuses/status-history/status-history.component';
import { StatusLatestComponent } from './pots/pot-detail/statuses/status-latest/status-latest.component';
import { ChartService } from './services/chart.service';
import { PotDetailComponent } from './pots/pot-detail/pot-detail.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatusHistoryComponent,
    StatusLatestComponent,
    PotDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
