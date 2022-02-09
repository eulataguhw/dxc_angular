import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { LoginFormService } from '../form/login-form.service';
import { TokenStorageService } from '../token-storage.service';
import { UserService } from '../user/user.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private utilityService: UtilityService,
    private loginFormService: LoginFormService,
    private tokenStorage: TokenStorageService
  ) {
    this.loginForm = this.loginFormService.createForm();
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
   }

  async onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      const res = await this.utilityService.submitAPI('auth', 'signin', {username, password});  
      if (res) {
        this.tokenStorage.saveToken(res.accessToken);
        this.tokenStorage.saveUser(res);
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['main']);
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
    
  }

}
