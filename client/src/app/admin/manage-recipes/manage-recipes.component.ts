import { Component } from '@angular/core';
import { recipeModel } from '../Model/recipeModel';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrl: './manage-recipes.component.css'
})
export class ManageRecipesComponent {

  recipeDetails: recipeModel = {}
  ingredients: any = []
  instructions: any = []
  mealType: any = []

  constructor(private api:ApiService,private router:Router){}

  addIngredients(value: string) {
    this.ingredients.push(value)
  }

  removeIngredients(value: string) {
    this.ingredients = this.ingredients.filter((item: string) => item != value)
  }

  addInstructions(value: string) {
    this.instructions.push(value)
  }

  removeInstructions(value: string) {
    this.instructions = this.instructions.filter((item: string) => item != value)
  }

  mealTypeSelect(checkEvent:any){
    if(checkEvent.target.checked){
      !this.mealType.includes(checkEvent.target.name)&&this.mealType.push(checkEvent.target.name)
    }else{
      this.mealType=this.mealType.filter((item:string) => item!=checkEvent.target.name)
    }
  }

  addRecipe(){
    this.recipeDetails.ingredients = this.ingredients
    this.recipeDetails.instructions = this.instructions
    this.recipeDetails.mealType = this.mealType

    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServings,image,mealType} = this.recipeDetails
    if(name &&ingredients!.length>0 &&instructions!.length>0 && prepTimeMinutes && cookTimeMinutes && servings && difficulty && cuisine && caloriesPerServings && image && mealType!.length>0){
      this.api.addRecipeAPI(this.recipeDetails).subscribe({
        next:(res:any) => {
          this.router.navigateByUrl("/admin/recipe-list")
          this.recipeDetails={}
          this.ingredients=[]
          this.instructions=[]
          this.mealType=[]
        },
        error:(reason:any) => {
          alert(reason.error)
          this.recipeDetails={}
          this.ingredients=[]
          this.instructions=[]
          this.mealType=[]
        },
      })
    }else{
      alert("Please fill the missing fields...")
    }
  }

}
