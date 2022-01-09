import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { GuidesComponent } from './components/guides/guides.component';
import { HotspotsComponent } from './components/hotspots/hotspots.component';
import { ChecklistsComponent } from './components/checklists/checklists.component';
import { NPSComponent } from './components/nps/nps.component';
import { SegmentsComponent } from './components/segments/segments.component';
import { ThemesComponent } from './components/themes/themes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    PerformanceComponent,
    GuidesComponent,
    HotspotsComponent,
    ChecklistsComponent,
    NPSComponent,
    SegmentsComponent,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
