import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsModule } from './blogs/blogs.module';
import { ProductsModule } from './products/products.module';
import { LayoutComponent } from './theme/layout/layout.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'contact-us', component: ContactUsComponent
      },
      {
        path: 'about-us', component: AboutUsComponent
      },
      {
        path: 'blogs', loadChildren: () => BlogsModule
      },
      {
        path: 'products', loadChildren: () => ProductsModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
