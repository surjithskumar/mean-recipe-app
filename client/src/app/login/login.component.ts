import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){
      this.loginForm=this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
      })
    }

    login(){
      if(this.loginForm.valid){
  
        const email=this.loginForm.value.email
        const password=this.loginForm.value.password
  
        //apicall
        this.api.registerAPI({email,password}).subscribe({
          next:(res:any) => {
            sessionStorage.setItem("user",JSON.stringify(res.user))
            sessionStorage.setItem("token",res.token)
            this.loginForm.reset()
            if(res.existingUser.role=='user'){
              this.router.navigateByUrl('/')
            }else{
              this.router.navigateByUrl('/admin')
            }
          },
          error:(reason:any) => {
            alert(reason.error)
            this.loginForm.reset()
          }
        })
      }else{
        alert("invalid form");
      }
    }


}
