import { HttpClient } from '@angular/common/http';
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

}
