import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './second/profile/profile.component';

const routes: Routes = [
  {path:'',component:ErrorComponent},
  {path:'main',component: MainComponent},
  {path:'second',component:SecondComponent,
  children:[{
    path:'profile',component:ProfileComponent}]
  },
 
 
  {path:'third',component:ThirdComponent},
  {path:"**", redirectTo:'third', pathMatch:'full'},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
