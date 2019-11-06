import { CreateChallengeComponent } from './../../pages/challenges/create-challenge/create-challenge.component';
import { ListChallengesComponent } from './../../pages/challenges/list-challenges/list-challenges.component';
import { ChallengesComponent } from './../../pages/challenges/challenges.component';
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FleetManagmentComponent } from 'src/app/pages/fleet-managment/fleet-managment.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    QRCodeModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    NotificationsComponent,
    MapComponent,
    FleetManagmentComponent,
    ChallengesComponent,
    ListChallengesComponent,
    CreateChallengeComponent,
  ]
})
export class AdminLayoutModule {}
