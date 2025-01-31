import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url='http://localhost:4000'
  constructor(private http:HttpClient) { }

  //getAllrecipes
  getAllrecipesAPI(){
    return this.http.get(`${this.server_url}/all-recipes`)
  }

  //add- testimony

  addTestimonyAPI(reqBody:any){
    return this.http.post(`${this.server_url}/add-testimony`,reqBody)
  }

  // register
  registerAPI(reqBody:any){
    return this.http.post(`${this.server_url}/register`,reqBody)
  }

  //login
  loginAPI(reqBody:any){
    return this.http.post(`${this.server_url}/login`,reqBody)
  }

  //req-header-appendToken
  appendToken(){
    let headers = new HttpHeaders()
    const token = sessionStorage.getItem('token')
    if(token){
      headers = headers.append('Authorization',`Bearer ${token}`)
    }
    return {headers}
  }

  //view recipe
  viewRecipeAPI(recipeId:string){
    return this.http.get(`${this.server_url}/recipe/${recipeId}/view`,this.appendToken())
  }

  //relatedRecipeAPI
  relatedRecipeAPI(cuisine:string){
    return this.http.get(`${this.server_url}/related-recipe?cuisine=${cuisine}`,this.appendToken())
  }

  //download recipe api
  downloadRecipeAPI(recipeId:string,reqBody:any){
    return this.http.post(`${this.server_url}/recipe/${recipeId}/download`,reqBody,this.appendToken())
  }

  //download recipe api
  saveRecipeAPI(recipeId:string,reqBody:any){
    return this.http.post(`${this.server_url}/recipe/${recipeId}/save`,reqBody,this.appendToken())
  }

  //get saved recipe api
  getsavedRecipe(){
    return this.http.get(`${this.server_url}/saved-recipe`,this.appendToken())
  }

  //get all testimony api
  getAllTestimonyAPI(){
    return this.http.get(`${this.server_url}/all-testimonials`,this.appendToken())
  }

  //get update testimony
  getUpdateTestimonyAPI(id:string,status:string){
    return this.http.get(`${this.server_url}/testimonials/${id}/update?status=${status}`,this.appendToken())
  }

  //get all approved testimony
  getAllApprovedTestimonyAPI(){
    return this.http.get(`${this.server_url}/all-approved-testimonials`)
  }

  //get all downloads api
  getAllDownloadsAPI(){
    return this.http.get(`${this.server_url}/all-downloads`,this.appendToken())
  }

  //getAllUsersAPI
  getAllUsersAPI(){
    return this.http.get(`${this.server_url}/all-users`,this.appendToken())
  }

  //add recipe Api

  addRecipeAPI(){
    return this.http.post(`${this.server_url}/add-recipe`,recipeDetails,this.appendToken())
  }

  //remove saved recipe api

  removeSavedRecipeAPI(id:string){
    return this.http.delete(`${this.server_url}/saved-recipe/${id}/remove`,this.appendToken())
  }

}