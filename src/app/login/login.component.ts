import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor( private router:Router) { }

  ngOnInit() {
    
    }
   
    login(loginInForm:NgForm){
      
    if(loginInForm.value.email== "rs868059@gmail.com" && loginInForm.value.password=="123")
    {
      this.router.navigate(["./signup"]);
    }
    else{
     
      alert("Ooop's you entered the wrong Credentials, try it again ");
    }
    }
}