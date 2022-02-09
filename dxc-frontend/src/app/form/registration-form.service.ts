import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../utility.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationFormService {

  constructor(private utilityService: UtilityService) { }


  public createForm() {
    return new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
  }

  public async retrieveRoles(): Promise<Object[]> {
    const rolesObj = await this.utilityService.retrieveAPI('role', 'getRole');
    let roles = [];
    for(let key of Object.keys(rolesObj)) {
      roles.push({
        value: rolesObj[key].id,
        label: rolesObj[key].name.substr(5, rolesObj[key].name.length - 4)
      });
    }
    return roles;
  }

}
