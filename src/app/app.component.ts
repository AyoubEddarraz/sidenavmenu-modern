import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'modern-navbar';

  // navbar status
  opened: boolean = false;

  ngOnInit(): void {}

  // change navbar status
  changeNavBarStatus = () => this.opened = !this.opened;

}
