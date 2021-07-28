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
    alert:boolean = false;
    email:string;
    password:string;
    
    logIn(){
      
    if(this.email == "soumya@gmail.com" && this.password =="123")
    {
      this.router.navigate(["./home"]);
    }
    else{
     
      alert("Ooop's you entered the wrong Credentials, try it again ");
    }
    }
}