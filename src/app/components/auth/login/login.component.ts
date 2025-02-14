import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  userForm: FormGroup = new FormGroup({
    userName: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required, Validators.minLength(5)])
  })

  constructor(private router: Router){
  }

  errorMessage: string = '';

  onUserSave(){
    // const isValid = this.userForm.valid;
    const formValue = this.userForm.value;

    // this.authServ.getUsers().subscribe((users) => {
    //   const user = users.find((user) => user.userName === formValue.userName);

    //   if (user) {
    //     if (user.password === formValue.password) {
    //       sessionStorage.setItem("userName",user.userName);
    //       this.errorMessage = '';
    //       this.userForm.reset();
    //       alert('Welcome to QuizMaster!');
    //       window.location.href = '/category';
    //     }
    //     else {
    //       this.errorMessage = 'Incorrect password. Please try again.';
    //     }
    //   }
    //   else {
    //     this.errorMessage = 'User not found. Please register first.';
    //   }

    // });

  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }

  navigateToHome(){
    this.router.navigate(['/category']);
  }
}
