import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.http.post('/api/login', this.loginForm.value)
        .subscribe(
          response => {
            console.log('Login successful', response);
            // Handle successful login here
            this.router.navigate(['/']);
            this.snackBar.open('Login Successful', 'Close', {
              duration: 3000, // Duration in milliseconds (3 seconds)
            });
          },
          error => {
            console.error('Wrong credentials', error);
            // Handle login failure here
            this.snackBar.open('Wrong credentials or not registered', 'Close', {
              duration: 3000, // Duration in milliseconds (3 seconds)
            });
          }
        );
    }
  }
}
