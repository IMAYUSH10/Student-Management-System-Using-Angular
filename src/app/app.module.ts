import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './second/profile/profile.component'



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SecondComponent,
    ThirdComponent,
    ErrorComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
