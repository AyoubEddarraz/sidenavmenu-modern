import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistsComponent } from './components/checklists/checklists.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuidesComponent } from './components/guides/guides.component';
import { HomeComponent } from './components/home/home.component';
import { HotspotsComponent } from './components/hotspots/hotspots.component';
import { NPSComponent } from './components/nps/nps.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { SegmentsComponent } from './components/segments/segments.component';
import { ThemesComponent } from './components/themes/themes.component';

const routes: Routes = [
  { path: "" , component: HomeComponent },
  { path: "dashboard" , component: DashboardComponent },
  { path: "performance" , component: PerformanceComponent },
  { path: "Guides" , component: GuidesComponent },
  { path: "Hotspots" , component: HotspotsComponent },
  { path: "Checklists" , component: ChecklistsComponent },
  { path: "NPS" , component: NPSComponent },
  { path: "Segments" , component: SegmentsComponent },
  { path: "Themes" , component: ThemesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
