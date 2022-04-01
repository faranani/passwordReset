import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignupForm: FormGroup;
  forbiddenEmails: any;
  errorMessage: string;

  constructor(private fb : FormBuilder,
    private auth:AuthService,
    private route :Router) { 
      
      
    }

  ngOnInit(): void {
  }

  buildSignUpForm(){
    this.SignupForm = this.fb.group({
      username :["",[Validators.required]],
      email :["",[Validators.required, Validators.email], this.forbiddenEmails],
      password :["",[Validators.required,Validators.minLength(4)]]
    })

  }

  signupUser() {
    this.auth.RegisterUser(this.SignupForm.value).subscribe(
      data=>{
        this.SignupForm.reset()
        setTimeout(()=>{
          this.route.navigate(['sign -in'])
        }, 3000)
      },
      err =>{
        if(err.error.msg)
        {
          this.errorMessage = err.error.msg[0].message;
        }

        if(err.error.msg)
        {
          this.errorMessage = err.error.message;
        }

      }
    )
  }
  

}
