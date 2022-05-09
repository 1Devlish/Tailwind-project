import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './launchr-parent/homepage/homepage.component';
import { ProjectDetailPageComponent } from './launchr-parent/project-detail-page/project-detail-page.component';
import { HowToParticipatePageComponent } from './launchr-parent/how-to-participate-page/how-to-participate-page.component';
import { ParticipantPageComponent } from './launchr-parent/participant-page/participant-page.component';
import { LaunchrParentComponent } from './launchr-parent/launchr-parent.component';
import { LaunchrRoutingModule } from './launchr-routing.module';
import { LaunchrFooterComponent } from './launchr-parent/launchr-footer/launchr-footer.component';
import { ProjectBasicDetailComponent } from './launchr-parent/project-basic-detail/project-basic-detail.component';
import { LaunchSaleDetailComponent } from './launchr-parent/launch-sale-detail/launch-sale-detail.component';



@NgModule({
  declarations: [
    HomepageComponent,
    ProjectDetailPageComponent,
    HowToParticipatePageComponent,
    ParticipantPageComponent,
    LaunchrParentComponent,
    LaunchrFooterComponent,
    ProjectBasicDetailComponent,
    LaunchSaleDetailComponent
  ],
  imports: [
    CommonModule,
    LaunchrRoutingModule
  ]
})
export class LaunchrModule { }
