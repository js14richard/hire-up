import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './StaticPages/about/about.component';
import { CandidateRegistrationComponent } from './CandidateFolder/candidate-registration/candidate-registration.component';
import { ContactComponent } from './StaticPages/contact/contact.component';
import { HomeComponent } from './StaticPages/home/home.component';
import { LoginComponent } from './StaticPages/login/login.component';
import { RecruiterRegistrationComponent } from './RecruiterFolder/recruiter-registration/recruiter-registration.component';
import { RegisterComponent } from './StaticPages/register/register.component';
import { DBoardLayoutComponent } from './CandidateFolder/CandDBoard/dboard-layout/dboard-layout.component';
import { CandidateDashboardComponent } from './CandidateFolder/CandDBoard/candidate-dashboard/candidate-dashboard.component';
import { CandidateAppliedJobsComponent } from './CandidateFolder/CandDBoard/candidate-applied-jobs/candidate-applied-jobs.component';
import { CandidateShortListedJobsComponent } from './CandidateFolder/CandDBoard/candidate-short-listed-jobs/candidate-short-listed-jobs.component';
import { CandidateSearchJobsComponent } from './CandidateFolder/CandDBoard/candidate-search-jobs/candidate-search-jobs.component';
import { CandidateMatchJobsComponent } from './CandidateFolder/CandDBoard/candidate-match-jobs/candidate-match-jobs.component';
import { CandidateFeedbackComponent } from './CandidateFolder/CandDBoard/candidate-feedback/candidate-feedback.component';
import { RecDboardComponent } from './RecruiterFolder/RecDboard/rec-dboard/rec-dboard.component';
import { RecDboardLayoutComponent } from './RecruiterFolder/RecDboard/rec-dboard-layout/rec-dboard-layout.component';
import { RecPostJobComponent } from './RecruiterFolder/RecDboard/rec-post-job/rec-post-job.component';
import { RecPostedJobsComponent } from './RecruiterFolder/RecDboard/rec-posted-jobs/rec-posted-jobs.component';
import { RecSearchCandidatesComponent } from './RecruiterFolder/RecDboard/rec-search-candidates/rec-search-candidates.component';
import { RecAppliedCandidatesComponent } from './RecruiterFolder/RecDboard/rec-applied-candidates/rec-applied-candidates.component';
import { RecMatchedCandidatesComponent } from './RecruiterFolder/RecDboard/rec-matched-candidates/rec-matched-candidates.component';
import { RecShortlistedCandidatesComponent } from './RecruiterFolder/RecDboard/rec-shortlisted-candidates/rec-shortlisted-candidates.component';
import { RecFeedbackComponent } from './RecruiterFolder/RecDboard/rec-feedback/rec-feedback.component';
import { MainNavigationComponent } from './StaticPages/main-navigation/main-navigation.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {path:'',component:HomeComponent, pathMatch:'full'},
  {path:'main-navigation',component:MainNavigationComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'candidate-registration', component:CandidateRegistrationComponent},
  {path:'recruiter-registration', component:RecruiterRegistrationComponent},
  {path:'candDBLayout',component:DBoardLayoutComponent},
  {path:'candidate-dashboard', component:CandidateDashboardComponent},
  {path:'candidate-applied-jobs',component:CandidateAppliedJobsComponent},
  {path:'candidate-shortlisted-jobs',component:CandidateShortListedJobsComponent},
  {path:'candidate-search-jobs',component:CandidateSearchJobsComponent},
  {path:'candidate-matched-jobs',component:CandidateMatchJobsComponent},
  {path:'candidate-feedback', component:CandidateFeedbackComponent},
  {path:'rec-DBLayout',component:RecDboardLayoutComponent},
  {path:'rec-dashboard',component:RecDboardComponent},
  {path:'rec-postJob', component:RecPostJobComponent},
  {path:'rec-postedJobs',component:RecPostedJobsComponent},
  {path:'rec-searchCandidates',component:RecSearchCandidatesComponent},
  {path:'rec-appliedCandidates',component:RecAppliedCandidatesComponent},
  {path:'rec-matchedCandidates',component:RecMatchedCandidatesComponent},
  {path:'rec-ShortlistedCandidates',component:RecShortlistedCandidatesComponent},
  {path:'rec-feedback', component:RecFeedbackComponent},
  {path:'app-component', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
