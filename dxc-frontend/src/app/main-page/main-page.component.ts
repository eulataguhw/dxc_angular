import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  username = '';
  name = '';
  role = '';

  constructor(private tokenStorage: TokenStorageService,
    private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.retrieveUserInfo();
  }

  retrieveUserInfo() {
    const userInfo = this.tokenStorage.getUser();
    this.username = userInfo.username;
    this.role = userInfo.roles;
    this.name = `${userInfo.firstName} ${userInfo.lastName}`;
    console.log(userInfo);
  }

}
