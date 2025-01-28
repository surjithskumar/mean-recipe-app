import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.css'
})
export class RequestComponent {

  allTestimonials:any=[]

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllTestimonials()
  }
   getAllTestimonials(){
    this.api.getAllTestimonyAPI().subscribe((res:any)=>{
      this.allTestimonials=res
      console.log(this.allTestimonials);
    })
   }
}
