import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { RequestComponent } from './request/request.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchPipe } from '../pipe/search.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    RequestComponent,
    RecipeListComponent,
    DownloadsComponent,
    ManageRecipesComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SearchPipe,
    FormsModule
  ]
})
export class AdminModule { }
