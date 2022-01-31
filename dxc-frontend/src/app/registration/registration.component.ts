import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistrationFormService } from '../form/registration-form.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  roles = [
    { label: 'User', value: '1' },
    { label: 'Manager', value: '2' },
    { label: 'Admin', value: '3' },
  ]

  constructor(private registrationFormService: RegistrationFormService,
    private utilityService: UtilityService) {
    this.registrationForm = this.registrationFormService.createForm();
   }

  ngOnInit(): void {
  }

  async onSubmit() {
    const payload = {
      username: this.registrationForm.get('username').value,
      password: this.registrationForm.get('password').value,
      email: this.registrationForm.get('email').value,
      role: [this.registrationForm.get('role').value],
      firstName: this.registrationForm.get('firstName').value,
      lastName: this.registrationForm.get('lastName').value,
    }
    const res = await this.utilityService.submitAPI('signup', payload);  
    if (res) {
      alert('Sucessfully Registered');
    }
  }

}
