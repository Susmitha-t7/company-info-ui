import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzDatabaseComponent } from './components/az-database/az-database.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: 'home', component: HomePageComponent },
  {path: 'azDatabase', component: AzDatabaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
