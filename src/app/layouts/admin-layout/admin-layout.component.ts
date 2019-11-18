import { Component, OnInit } from "@angular/core";
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {
  public sidebarColor = 'red';

  constructor(
    private themeService: ThemeService
  ) {}

  changeSidebarColor(color) {
    this.themeService.sidebarColor.next(color);
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const mainPanel = document.getElementsByClassName('main-panel')[0];

    this.sidebarColor = color;

    if (sidebar != undefined) {
        sidebar.setAttribute('data', color);
    }
    if (mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
  }
  changeDashboardColor(color){
    this.themeService.mainPanelColor.next(color);
    const body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    } else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }
  ngOnInit() {}
}
