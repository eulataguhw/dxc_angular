import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginFormService } from '../form/login-form.service';
import { UserService } from '../user/user.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private utilityService: UtilityService,
    private loginFormService: LoginFormService
  ) {
    this.loginForm = this.loginFormService.createForm();
  }

  ngOnInit(): void {

   }

  onSubmit() {
    const res = this.utilityService.retrieveAPI('resource');
    console.log(`res: ${res}`);
  }

}
