import { RankingComponent } from './../../pages/ranking/ranking.component';
import { ChallengesComponent } from './../../pages/challenges/challenges.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { MapComponent } from '../../pages/map/map.component';
import { UserComponent } from '../../pages/user/user.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { FleetManagmentComponent } from 'src/app/pages/fleet-managment/fleet-managment.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'maps', component: MapComponent },
  { path: 'user', component: UserComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'fleetManagment', component: FleetManagmentComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'ranking', component: RankingComponent   },

];
