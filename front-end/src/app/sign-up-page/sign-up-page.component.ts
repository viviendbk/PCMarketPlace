import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.signUpForm = this.formBuilder.group({
      userId: 1,
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      address: ['']
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value)
      this.http.post('/api/users', this.signUpForm.value)
        .subscribe(
          response => {
            console.log('User created successfully', response);
            // Handle successful response here (e.g., navigate to login or show a success message)
            this.router.navigate(['/login']);
            this.snackBar.open('Account Created Successfully', 'Close', {
              duration: 3000, // Duration in milliseconds (3 seconds)
            });
          },
          error => {
            console.error('Error occurred while creating user', error);
            // Handle error response here (e.g., show an error message to the user)
          }
        );
    }
  }

}
