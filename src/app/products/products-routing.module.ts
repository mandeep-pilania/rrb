import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BallBearingsComponent } from './ball-bearings/ball-bearings.component';
import { ClutchBearingsComponent } from './clutch-bearings/clutch-bearings.component';
import { CylindricalRollerBearingsComponent } from './cylindrical-roller-bearings/cylindrical-roller-bearings.component';
import { KingpinBearingsComponent } from './kingpin-bearings/kingpin-bearings.component';
import { NeedleBearingsComponent } from './needle-bearings/needle-bearings.component';
import { TapperRollerBearingsComponent } from './tapper-roller-bearings/tapper-roller-bearings.component';
import { ThrustBearingsComponent } from './thrust-bearings/thrust-bearings.component';
import { UcBearingsComponent } from './uc-bearings/uc-bearings.component';
import { WaterPumpBearingsComponent } from './water-pump-bearings/water-pump-bearings.component';
import { SphericalRollerBearingsComponent } from './spherical-roller-bearings/spherical-roller-bearings.component';
import { SteeringBearingsComponent } from './steering-bearings/steering-bearings.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { UnversalJoinCrossComponent } from './unversal-join-cross/unversal-join-cross.component';

const routes: Routes = [
  {
    path:'',component:AllProductsComponent
  },
  {
    path:'ball-bearings',component:BallBearingsComponent
  },
  {
    path:'clutch-bearings',component:ClutchBearingsComponent
  },
  {
    path:'cylindrical-rooler-bearings',component:CylindricalRollerBearingsComponent
  },
  {
    path:'kingpin-bearings',component:KingpinBearingsComponent
  },
  {
    path:'needle-bearings',component:NeedleBearingsComponent
  },
  {
    path:'tapper-roller-bearings',component:TapperRollerBearingsComponent
  },
  {
    path:'spherical-bearings',component:SphericalRollerBearingsComponent
  },
  {
    path:'steering-bearings',component:SteeringBearingsComponent
  },
  {
    path:'thrust-bearings',component:ThrustBearingsComponent
  },
  {
    path:'uc-bearings',component:UcBearingsComponent
  },
  {
    path:'universal-join-cross',component:UnversalJoinCrossComponent
  },
  {
    path:'water-pump-bearings',component:WaterPumpBearingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
