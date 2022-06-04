import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  usernameLabel: string = 'Username';
  passwordLabel: string = 'Password';
  submitLabel: string = 'Submit';
  username: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [null, [Validators.minLength(5), Validators.required]],
      password: [null, [Validators.minLength(6), Validators.required]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userIsLogged = this.loginService.loginUser(
        this.userForm.value.username,
        this.userForm.value.password
      );
      console.log(userIsLogged);
    }
    console.log(this.userForm);
  }
}
