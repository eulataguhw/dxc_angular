import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  username = '';
  role = [];

  constructor(private tokenStorage: TokenStorageService,
    private router: Router, private cdr: ChangeDetectorRef) {
      router.events.subscribe(() => this.retrieveUserInfo());
     }

 
  retrieveUserInfo() {
    const userInfo = this.tokenStorage.getUser();
    this.username = userInfo.username;
    this.role = userInfo.roles;
  }

  logout() {
    this.tokenStorage.signOut();
    alert(`You have successfully logout`);
    this.router.navigate(['/']);
    this.cdr.detectChanges();
  }

}
