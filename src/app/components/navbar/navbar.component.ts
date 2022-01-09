import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  // route navbar menu
  navitems :navitems[] = [
    {
      parentName: "analytics",
      childs: [
        { childName: "dashboard" , childIcone: "dashboard" , childRoute: "/dashboard" },
        { childName: "performance" , childIcone: "equalizer" , childRoute: "/performance" },
      ]
    },
    {
      parentName: "content",
      childs: [
        { childName: "Guides" , childIcone: "dashboard" , childRoute: "/Guides" },
        { childName: "Hotspots" , childIcone: "equalizer" , childRoute: "/Hotspots" },
        { childName: "Checklists" , childIcone: "equalizer" , childRoute: "/Checklists" },
        { childName: "NPS" , childIcone: "equalizer" , childRoute: "/NPS" },
      ]
    },
    {
      parentName: "customization",
      childs: [
        { childName: "Segments" , childIcone: "dashboard" , childRoute: "/Segments" },
        { childName: "Themes" , childIcone: "equalizer" , childRoute: "/Themes" },
      ]
    },
  ]

}

export interface navitems {
  parentName: string;
  childs: child[];
}

export interface child{
  childName: string;
  childIcone: string;
  childRoute: string;
}
