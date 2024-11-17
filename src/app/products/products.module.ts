import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { TapperRollerBearingsComponent } from './tapper-roller-bearings/tapper-roller-bearings.component';
import { BallBearingsComponent } from './ball-bearings/ball-bearings.component';
import { UcBearingsComponent } from './uc-bearings/uc-bearings.component';
import { WaterPumpBearingsComponent } from './water-pump-bearings/water-pump-bearings.component';
import { ClutchBearingsComponent } from './clutch-bearings/clutch-bearings.component';
import { SteeringBearingsComponent } from './steering-bearings/steering-bearings.component';
import { UnversalJoinCrossComponent } from './unversal-join-cross/unversal-join-cross.component';
import { NeedleBearingsComponent } from './needle-bearings/needle-bearings.component';
import { CylindricalRollerBearingsComponent } from './cylindrical-roller-bearings/cylindrical-roller-bearings.component';
import { SphericalRollerBearingsComponent } from './spherical-roller-bearings/spherical-roller-bearings.component';
import { KingpinBearingsComponent } from './kingpin-bearings/kingpin-bearings.component';
import { ThrustBearingsComponent } from './thrust-bearings/thrust-bearings.component';
import { AllProductsComponent } from './all-products/all-products.component';


@NgModule({
  declarations: [
    TapperRollerBearingsComponent,
    BallBearingsComponent,
    UcBearingsComponent,
    WaterPumpBearingsComponent,
    ClutchBearingsComponent,
    SteeringBearingsComponent,
    UnversalJoinCrossComponent,
    NeedleBearingsComponent,
    CylindricalRollerBearingsComponent,
    SphericalRollerBearingsComponent,
    KingpinBearingsComponent,
    ThrustBearingsComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
