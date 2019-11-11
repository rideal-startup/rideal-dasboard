import { ChallengesComponent } from './../../pages/challenges/challenges.component';
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FleetManagmentComponent } from 'src/app/pages/fleet-managment/fleet-managment.component';
import { LineFormComponent } from 'src/app/pages/fleet-managment/line-form/line-form.component';

import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    DragDropModule,
    DndModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    NotificationsComponent,
    MapComponent,
    FleetManagmentComponent,
    LineFormComponent,
    

    ChallengesComponent
  ]
})
export class AdminLayoutModule {}
