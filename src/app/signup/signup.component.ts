import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit():void{

  }
  dynamic:string=""
  emailcheck:string=""
  passwordcheck:string=""
  login(signInForm:NgForm)
  {
    if(signInForm.value.email== this.emailcheck && signInForm.value.password==this.passwordcheck)
    {
     
      this.router.navigate(["./home"]);
    }
    else{
     
      
      alert("Ooop's you entered the wrong Credentials, try it again ");
    }
  }
  seclogin(secondsign:NgForm)
  {
    if(secondsign.value.password== secondsign.value.ConfirmPassword)
    {
      alert(" Success! ");
      this.dynamic="Success! the password match"
      this.emailcheck=secondsign.value.email
      this.passwordcheck=secondsign.value.password
      console.log(secondsign.value.email)
      console.log(secondsign.value.password)
    }
    else{
     
      
      alert("Ooop's you entered the wrong Credentials, try it again ");
      this.dynamic="Sorry ! the password not match"
    }
  }

}
