import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-recipe',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './view-recipe.component.html',
  styleUrl: './view-recipe.component.css'
})
export class ViewRecipeComponent {

  recipeId:string=""
  recipe:any={}
  allRelatedRecipes:any=[]

  constructor(private route:ActivatedRoute,private api:ApiService){}

  ngOnInit(){
    this.route.params.subscribe((res:any)=>{
      this.recipeId=res.id
      console.log(this.recipeId);
      this.getRecipe(this.recipeId)
    })
  }

  getRecipe(recipeId:string){
    this.api.viewRecipeAPI(recipeId).subscribe((res:any)=>{
      this.recipe=res
      console.log(this.recipeId);
    })
  }

}
