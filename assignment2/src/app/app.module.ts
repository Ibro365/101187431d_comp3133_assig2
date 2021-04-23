import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    HomeComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
