import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  // http://localhost:4200/admin/dashboard
  {path:"",component:DashboardComponent,title:"Dashboard"},
  {path:"recipe-list",component:RecipeListComponent},
  {path:"users-list",component:DownloadsComponent},
  {path:"download-list",component:DownloadsComponent},
  {path:"request-list",component:RequestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

