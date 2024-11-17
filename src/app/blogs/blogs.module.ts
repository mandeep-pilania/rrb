import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { IndianVSchinaballComponent } from './indian-vschinaball/indian-vschinaball.component';
import { HowtoknowgoodqualityComponent } from './howtoknowgoodquality/howtoknowgoodquality.component';
import { UniversaljointComponent } from './universaljoint/universaljoint.component';


@NgModule({
  declarations: [
    IndianVSchinaballComponent,
    HowtoknowgoodqualityComponent,
    UniversaljointComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
