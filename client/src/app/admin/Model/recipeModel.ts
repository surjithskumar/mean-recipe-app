export class recipeModel{
    name?:string
    ingredients?:Array<string>
    instructions?:Array<string>
    prepTimeMinutes?:number
    cookTimeMinutes?:number
    servings?:number
    difficulty?:string
    cuisine?:string
    caloriesPerServings?:number
    image?:string
    mealType?:Array<string>
}