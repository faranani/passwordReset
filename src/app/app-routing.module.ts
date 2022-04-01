import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './sigin/sigin.component';
import { SignupComponent } from './signup/signup.component';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';

const routes: Routes = [

  {
    path : 'sign-in', component :SiginComponent,
  },
  {
    path : 'sign-up', component :SignupComponent,
  },

  {
    path : 'request-reset', component :RequestResetComponent,
  },

  {
    path : 'response-reset', component :ResponseResetComponent,
  },

  {
    path : '**', 
    redirectTo : 'sign-in'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
