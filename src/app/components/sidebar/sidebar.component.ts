import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    icon: 'tim-icons icon-chart-pie-36',
    class: ''
  },
  {
    path: '/admin/maps',
    title: 'Maps',
    icon: 'tim-icons icon-pin',
    class: ''
  },
  {
    path: '/admin/user',
    title: 'User Profile',
    icon: 'tim-icons icon-single-02',
    class: ''
  },
  {
    path: '/admin/tables',
    title: 'Table List',
    icon: 'tim-icons icon-puzzle-10',
    class: ''
  },
  {
    path: '/admin/challenges',
    title: 'Challenges',
    icon: 'fas fa-award',
    class: ''
  },
  {
    path: '/admin/fleetManagment',
    title: 'Fleet Managment',
    icon: 'fas fa-subway',
    class: ''
  },
  {
    path: '/admin/ranking',
    title: 'Ranking',
    icon: 'fas fa-trophy',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
