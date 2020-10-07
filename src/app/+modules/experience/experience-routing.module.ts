import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppUrls } from 'src/app/configs/app-urls.config';
import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
  {
    path: AppUrls.AppExperienceRoot,
    component: ExperienceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExperienceRoutingModule { }
