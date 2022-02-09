import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationFormService } from '../form/registration-form.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  roles = [];
  loadHTML = false;

  constructor(private registrationFormService: RegistrationFormService,
    private utilityService: UtilityService,
    private router: Router) {
    this.registrationForm = this.registrationFormService.createForm();
   }

  ngOnInit() {
    this.getRole();
  }

  async getRole() {
    this.roles = await this.registrationFormService.retrieveRoles();
    this.loadHTML = true;
  }

  async onSubmit() {
    if (this.registrationForm.valid) {
      const payload = {
        username: this.registrationForm.get('username').value,
        password: this.registrationForm.get('password').value,
        email: this.registrationForm.get('email').value,
        role: [this.registrationForm.get('role').value],
        firstName: this.registrationForm.get('firstName').value,
        lastName: this.registrationForm.get('lastName').value,
      }
      const res = await this.utilityService.submitAPI('auth', 'signup', payload);  
      if (res) {
        alert('Sucessfully Registered');
        if (confirm) {
          this.router.navigate(['/login']);
        }
      }
    } else {
      this.registrationForm.markAllAsTouched();
    }
    
  }

}
