import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  RequestResetForm: FormGroup;
  forbiddenEmails: any;
  errorMessage: string;
  successMessage: string;
  IsvalidForm = true;

  constructor(private authservice :AuthService,
    private route : Router) { }

  ngOnInit(): void {
  }

  requstUser(user) {
    this.authservice.requestResetUser(this.RequestResetForm.value).subscribe(
      data=>{
        this.RequestResetForm.reset()
        this.successMessage  ="Reset password link send to email sucessfully."
        setTimeout(()=>{

          this.successMessage = null;
          this.route.navigate(['sign-in']);

        },3000)
      },
      err =>{

        if (err.error.message) {
          this.errorMessage = err.error.message;
        }

      }

      
    )
  }
  

}
