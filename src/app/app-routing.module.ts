import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { StationListComponent } from './station-list/station-list.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminSignupComponent } from './adminsignup/admin-signup.component';

const routes: Routes = [
  {path:'',redirectTo:'signin' , pathMatch:'full'},
  {path: "trips", component: TripListComponent},
  {path: "create-trip", component: CreateTripComponent},
  {path: '', redirectTo:'trips', pathMatch:'full'},
  {path: 'update-trip/:id', component: UpdateTripComponent},
  {path: 'stations', component: StationListComponent},
  {path: 'trips', component: TripListComponent},
  {path:'signup', component: AdminSignupComponent},
  {path:'signin', component: AdminsigninComponent},
  {path:'', redirectTo: 'signup', pathMatch: 'full'},
  {path:'', redirectTo: 'signin', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
