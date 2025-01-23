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

}
