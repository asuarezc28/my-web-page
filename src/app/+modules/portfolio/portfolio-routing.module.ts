import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppUrls } from 'src/app/configs/app-urls.config';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {
      path: AppUrls.AppPortfolioRoot,
      component: PortfolioComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
