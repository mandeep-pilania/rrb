import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndianVSchinaballComponent } from './indian-vschinaball/indian-vschinaball.component';
import { HowtoknowgoodqualityComponent } from './howtoknowgoodquality/howtoknowgoodquality.component';
import { UniversaljointComponent } from './universaljoint/universaljoint.component';

const routes: Routes = [
  {
    path:'Indian_vs_Chinese_Ball_Bearings',component:IndianVSchinaballComponent
  },
  {
    path:'How_to_Know_if_a_Ball_Bearing_is_of_Good_Quality',component:HowtoknowgoodqualityComponent
  },
  {
    path:'Universal_joints_also_known_as_U_joints_or_universal',component:UniversaljointComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
