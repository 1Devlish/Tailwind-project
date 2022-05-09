import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './launchr-parent/homepage/homepage.component';
import { ProjectDetailPageComponent } from './launchr-parent/project-detail-page/project-detail-page.component';
import { HowToParticipatePageComponent } from './launchr-parent/how-to-participate-page/how-to-participate-page.component';
import { ParticipantPageComponent } from './launchr-parent/participant-page/participant-page.component';
import { LaunchrParentComponent } from './launchr-parent/launchr-parent.component';
import { ProjectBasicDetailComponent } from './launchr-parent/project-basic-detail/project-basic-detail.component';
import { LaunchSaleDetailComponent } from './launchr-parent/launch-sale-detail/launch-sale-detail.component';



const routes: Routes = [
    {
        path: '', component: LaunchrParentComponent, children: [
          {
            path: 'homepage', component: HomepageComponent
          },
          {
            path: 'project-detail', component: ProjectDetailPageComponent 
          },
          {
            path: 'how-to-participate', component: HowToParticipatePageComponent
          },
          {
            path: 'participantpage', component: ParticipantPageComponent
          },
          {
            path: 'launchr', component: LaunchrParentComponent
          },
          {
            path: 'project-basic-detail', component: ProjectBasicDetailComponent
          },
          {
            path: 'launch-sale-detail', component:  LaunchSaleDetailComponent
          },
          {
            path: '**', component: HomepageComponent
          },
    
        ]
      },
//   { path: 'homepage', component: HomepageComponent },
//   { path: 'project-detail', component: ProjectDetailPageComponent },
//   { path: 'how-to-participate', component: HowToParticipatePageComponent },
//   { path: 'participantpage', component: ParticipantPageComponent },
//   { path: 'launchr', component: LaunchrParentComponent },
//   {
//     path: '', redirectTo: 'homepage', pathMatch: 'full'
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchrRoutingModule { }
