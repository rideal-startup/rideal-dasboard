import { PodiumComponent } from './../../pages/ranking/podium/podium.component';
import { RankingComponent } from './../../pages/ranking/ranking.component';
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
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FleetManagmentComponent } from 'src/app/pages/fleet-managment/fleet-managment.component';
import { LineFormComponent } from 'src/app/pages/fleet-managment/line-form/line-form.component';

import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QRCodeModule } from 'angularx-qrcode';
import { AuthenticationBasicService } from 'src/app/services/authentication-basic.service';
import { DurationPickerModule } from 'ngx-duration-picker';

@NgModule({
  imports: [
    DragDropModule,
    DndModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    QRCodeModule,
    DurationPickerModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    MapComponent,
    FleetManagmentComponent,
    LineFormComponent,
    ChallengesComponent,
    ListChallengesComponent,
    CreateChallengeComponent,
    RankingComponent,
    PodiumComponent
  ],
  providers: [
    AuthenticationBasicService,
  ]
})
export class AdminLayoutModule {}
