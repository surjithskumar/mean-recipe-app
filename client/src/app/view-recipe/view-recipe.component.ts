import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import jspdf from 'jspdf'
import autoTable from 'jspdf-autotable'

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
      this.getRelatedRecipes(res.cuisine)
    })
  }

  getRelatedRecipes(cuisine:string){
    this.api.relatedRecipeAPI(cuisine).subscribe((res:any)=>{
      if(res.length>1){
        this.allRelatedRecipes=res.filter((item:any)=>item.name!=item.recipe.name)
        console.log(this.allRelatedRecipes);
      }else{
        this.allRelatedRecipes=[]
      }
    })
  }

  downloadRecipe(){
    this.api.downloadRecipeAPI(this.recipeId,this.recipe).subscribe((res:any)=>{
      alert('recipe download')
      this.generatePdf()
    })
  }

  generatePdf(){
    const pdf = new jspdf()
    pdf.setFontSize(16)
    pdf.setTextColor('blue')
    pdf.text(this.recipe.name,10,10)
    pdf.setFontSize(12)
    pdf.setTextColor('black')
    pdf.text(`Cuisine :${this.recipe.cuisine}`,10,15)
    pdf.text(`Servings :${this.recipe.servings}`,10,20)
    pdf.text(`Mode of Cooking :${this.recipe.difficulty}`,10,25)
    pdf.text(`Total Preparation Time :${this.recipe.prepTimeMinutes}`,10,30)
    pdf.text(`Total Cooking Time :${this.recipe.cookTimeMinutes}`,10,35)
    pdf.text(`Calories :${this.recipe.caloriesPerServing}`,10,40)

    // ingredients needed and instruction
    let head = [['Ingredients Needed','Cooking Instruction']]
    let body= []
    body.push([this.recipe.ingredients,this.recipe.instructions])
    autoTable(pdf,{head,body,startY:50})
    pdf.output('dataurlnewwindow')
    pdf.save('recipe.pdf')
  }

  saveRecipe(){
    this.api.saveRecipeAPI(this.recipeId,this.recipe).subscribe
    ({
      next:(res:any) => {
        alert("Recipe added tp your collection");
      },
      error:(reason:any) => {
        alert(reason.error)
        console.log(reason.error);
      }
    })
  }

}
