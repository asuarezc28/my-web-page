import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component'
import { SharedModule } from 'src/app/shared/shared.module';
// import { VisualsModule } from 'src/app/shared/visuals/visuals.module';

//Because is the "home" page  ----> "RouterModule.forChild(["   in imports 

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    SharedModule,
    // VisualsModule
  ],
  exports: [
    
  ]
})

export class HomeModule { }



