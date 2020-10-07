import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppUrls } from 'src/app/configs/app-urls.config';
import { AboutMeComponent } from './components/about-me/about-me.component';


const routes: Routes = [
    {
        path: AppUrls.AppAboutMeRoot,
        component: AboutMeComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutMeRoutingModule { }
