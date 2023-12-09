import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './StaticPages/main-navigation/main-navigation.component';
import { HomeComponent } from './StaticPages/home/home.component';
import { AboutComponent } from './StaticPages/about/about.component';
import { ContactComponent } from './StaticPages/contact/contact.component';
import { RegisterComponent } from './StaticPages/register/register.component';
import { LoginComponent } from './StaticPages/login/login.component';
import { FooterComponent } from './StaticPages/footer/footer.component';
import { AddressComponent } from './StaticPages/address/address.component';
import { RegisterSectionComponent } from './StaticPages/register-section/register-section.component';
import { CandidateRegistrationComponent } from './CandidateFolder/candidate-registration/candidate-registration.component';
import { RecruiterRegistrationComponent } from './RecruiterFolder/recruiter-registration/recruiter-registration.component';
import { CandidateDashboardComponent } from './CandidateFolder/CandDBoard/candidate-dashboard/candidate-dashboard.component';
import { CandidateSidebarComponent } from './CandidateFolder/CandDBoard/candidate-sidebar/candidate-sidebar.component';
import { CandidateAppliedJobsComponent } from './CandidateFolder/CandDBoard/candidate-applied-jobs/candidate-applied-jobs.component';
import { CandidateSearchJobsComponent } from './CandidateFolder/CandDBoard/candidate-search-jobs/candidate-search-jobs.component';
import { CandidateMatchJobsComponent } from './CandidateFolder/CandDBoard/candidate-match-jobs/candidate-match-jobs.component';
import { CandidateShortListedJobsComponent } from './CandidateFolder/CandDBoard/candidate-short-listed-jobs/candidate-short-listed-jobs.component';
import { CandidateFeedbackComponent } from './CandidateFolder/CandDBoard/candidate-feedback/candidate-feedback.component';
import { DBoardLayoutComponent } from './CandidateFolder/CandDBoard/dboard-layout/dboard-layout.component';
import { DataTablesModule } from 'angular-datatables';
import { RecDboardLayoutComponent } from './RecruiterFolder/RecDboard/rec-dboard-layout/rec-dboard-layout.component';
import { RecDboardComponent } from './RecruiterFolder/RecDboard/rec-dboard/rec-dboard.component';
import { RecPostJobComponent } from './RecruiterFolder/RecDboard/rec-post-job/rec-post-job.component';
import { RecPostedJobsComponent } from './RecruiterFolder/RecDboard/rec-posted-jobs/rec-posted-jobs.component';
import { RecSearchCandidatesComponent } from './RecruiterFolder/RecDboard/rec-search-candidates/rec-search-candidates.component';
import { RecAppliedCandidatesComponent } from './RecruiterFolder/RecDboard/rec-applied-candidates/rec-applied-candidates.component';
import { RecShortlistedCandidatesComponent } from './RecruiterFolder/RecDboard/rec-shortlisted-candidates/rec-shortlisted-candidates.component';
import { RecViewResumeComponent } from './RecruiterFolder/RecDboard/rec-view-resume/rec-view-resume.component';
import { RecFeedbackComponent } from './RecruiterFolder/RecDboard/rec-feedback/rec-feedback.component';
import { RecSidebarComponent } from './RecruiterFolder/RecDboard/rec-sidebar/rec-sidebar.component';
import { RecMatchedCandidatesComponent } from './RecruiterFolder/RecDboard/rec-matched-candidates/rec-matched-candidates.component';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    AddressComponent,
    RegisterSectionComponent,
    CandidateRegistrationComponent,
    RecruiterRegistrationComponent,
    CandidateDashboardComponent,
    CandidateSidebarComponent,
    CandidateAppliedJobsComponent,
    CandidateSearchJobsComponent,
    CandidateMatchJobsComponent,
    CandidateShortListedJobsComponent,
    CandidateFeedbackComponent,
    DBoardLayoutComponent,
    RecDboardLayoutComponent,
    RecDboardComponent,
    RecPostJobComponent,
    RecPostedJobsComponent,
    RecSearchCandidatesComponent,
    RecAppliedCandidatesComponent,
    RecShortlistedCandidatesComponent,
    RecViewResumeComponent,
    RecFeedbackComponent,
    RecSidebarComponent,
    RecMatchedCandidatesComponent,
    DashboardNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
