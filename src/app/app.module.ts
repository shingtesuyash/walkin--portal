import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { ReviewSubmitComponent } from './review-submit/review-submit.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewWalkinsComponent } from './view-walkins/view-walkins.component'; 
import { HttpClientModule } from '@angular/common/http';
import { WalkinDetailComponent } from './walkin-detail/walkin-detail.component';
import { HallTicketComponent } from './hall-ticket/hall-ticket.component';
import { ShowRolesComponent } from './show-roles/show-roles.component';
import { PreRequisitesComponent } from './pre-requisites/pre-requisites.component';
import { MarkdownModule } from 'ngx-markdown';
import { BulletPointComponent } from './bullet-point/bullet-point.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PersonalInfoComponent,
    NavbarComponent,
    TaskbarComponent,
    QualificationsComponent,
    ReviewSubmitComponent,
    ViewWalkinsComponent,
    WalkinDetailComponent,
    HallTicketComponent,
    ShowRolesComponent,
    PreRequisitesComponent,
    BulletPointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
