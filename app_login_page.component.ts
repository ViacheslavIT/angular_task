import {Component, Output, OnInit, EventEmitter} from "@angular/core";
import {FormsModule, Validators} from "@angular/forms";

class LoginForm {
    constructor(
      public username: string,
      public password: string
    ){}
}

@Component({
    selector: "app-login-page",
    standalone: true,
    imports: [FormsModule],
    template: `
<div>
  <input id="username-input" type="text" [(ngModel)]="loginForm.username" #username="ngModel" required [attr.value]="loginForm.username">
  <input id="password-input" type="password" [(ngModel)]="loginForm.password" #password="ngModel" required [attr.value]="loginForm.password">
  <button id="login-button" type="submit" (click)="submitLogin()" [disabled]="!(username.valid && password.valid)">Submit</button>
</div>
`
})
export class AppComponent {
    loginForm = new LoginForm("", "");

    @Output() login: EventEmitter<any> = new EventEmitter();
    submitLogin() {
      let username = this.loginForm.username,
          password = this.loginForm.password;

      this.login.emit({username, password});
    }
}
