import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { log } from 'node:console';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  homeRecipes:any=[]
  allTestimony:any=[]

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllHomeRecipes()
    this.getAllTestimony()
  }
  getAllHomeRecipes(){
    this.api.getAllrecipesAPI().subscribe((res:any)=>{
      this.homeRecipes=res.slice(0,6)
      console.log(this.homeRecipes);
    })
  }

  getAllTestimony(){
    this.api.getAllApprovedTestimonyAPI().subscribe((res:any) => {
      this.allTestimony = res.filter((item:any) => item.status == 'Approved')
      console.log(this.allTestimony);
    })
  }
  
}
