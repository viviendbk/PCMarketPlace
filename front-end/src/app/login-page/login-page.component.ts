import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar) {
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
          },
          error => {
            console.error('Wrong credentials', error);
            // Handle login failure here
          }
        );
    }
  }
}
