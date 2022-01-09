import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const material:any = [
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})

export class MaterialModule { }
