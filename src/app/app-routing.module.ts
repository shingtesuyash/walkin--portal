import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { ReviewSubmitComponent } from './review-submit/review-submit.component';
import { ViewWalkinsComponent } from './view-walkins/view-walkins.component';
import { WalkinDetailComponent } from './walkin-detail/walkin-detail.component';
import { HallTicketComponent } from './hall-ticket/hall-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'personalInfo',
    component: PersonalInfoComponent
  },
  {
    path: 'qualifications',
    component: QualificationsComponent
  },
  {
    path: 'review',
    component: ReviewSubmitComponent
  },

  {
    path: 'allWalkins',
    component: ViewWalkinsComponent
  },
  {
    path: 'walkinDetail',
    component: WalkinDetailComponent
  },
  {
    path: 'hallTicket',
    component: HallTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
