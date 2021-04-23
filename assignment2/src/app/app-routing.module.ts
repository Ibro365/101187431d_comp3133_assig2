import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
  { path: 'signup', component:SignupComponent, canActivate: [AuthGuard]},
  { path: 'booking', component:BookingComponent, canActivate: [AuthGuard]},
  { path: 'login', component:LoginComponent},
  { path: 'logout', component:LogoutComponent},
  { path: '', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
