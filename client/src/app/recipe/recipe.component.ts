import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ApiService } from '../services/api.service';
import { SearchPipe } from '../pipe/search.pipe';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [HeaderComponent,SearchPipe,FormsModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  allRecipes:any=[]
  dummyRecipes:any=[]
  searchKey:string=""

  constructor(private api:ApiService){}

  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes(){
    this.api.getAllrecipesAPI().subscribe((res:any)=>{
      this.allRecipes=res
      this.dummyRecipes=this.allRecipes
      console.log(this.allRecipes);
    })
  }

  filterRecipes(recipeType:string,recipeName:string){
    this.allRecipes=this.dummyRecipes.filter((item:any)=>item[recipeType].includes(recipeName))
  }
}
