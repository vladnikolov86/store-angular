import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from 'src/app/services/login-service.service';
import { NotificationService } from 'src/app/services/notification.service';

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
  userLoggedIn: string = 'User logged in successfully';

  incorrectLogin: string = 'User credentials are wrong';
  submitLabel: string = 'Submit';
  sucessLabel: string = 'Success';
  errorLabel: string = 'Error';
  username: string = '';
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private notifications: NotificationService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [null, [Validators.minLength(5), Validators.required]],
      password: [null, [Validators.minLength(6), Validators.required]],
    });
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
    const userIsLogged = this.loginService.loginUser(
      this.userForm.value.username,
      this.userForm.value.password
    );
    if (userIsLogged) {
      return this.notifications.open(this.userLoggedIn, this.sucessLabel);
    }
    this.notifications.open(this.incorrectLogin, this.errorLabel);
  }
}
