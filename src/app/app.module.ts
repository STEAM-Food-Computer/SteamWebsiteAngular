import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoodComputerComponent } from './food-computer/food-computer.component';

const appRoutes: Routes = [
 // { path : '' , redirectTo : '/home' , pathMatch:'full' },
  { path: '', component: HomeComponent },
  { path: 'foodcomputer', component: FoodComputerComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodComputerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
