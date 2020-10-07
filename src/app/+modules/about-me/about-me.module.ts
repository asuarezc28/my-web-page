import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import {AboutMeComponent} from './components/about-me/about-me.component'
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    SharedModule,
  ]
})
export class AboutMeModule { }
