import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppUrls } from '../configs/app-urls.config';


const routes: Routes = [
  { path: AppUrls.App, redirectTo: AppUrls.AppHome, pathMatch: 'full' },
  { path: AppUrls.AppHome, loadChildren: () => import('../+modules/home/home.module').then(m => m.HomeModule) },
  { path: AppUrls.AppAboutMe, loadChildren: () => import('../+modules/about-me/about-me.module').then(m => m.AboutMeModule) },
  { path: AppUrls.AppExperience, loadChildren: () => import('../+modules/experience/experience.module').then(m => m.ExperienceModule) },
  { path: AppUrls.AppPortfolio, loadChildren: () => import('../+modules/portfolio/portfolio.module').then(m => m.PortfolioModule) },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }


