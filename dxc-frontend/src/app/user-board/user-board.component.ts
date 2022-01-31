import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.sass']
})
export class UserBoardComponent implements OnInit {

  userData;

  displayedColumns: string[] = ['username', 'role', 'email' ,'name'];

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.retrieveUserData();
  }

  async retrieveUserData() {
    this.userData = await this.utilityService.retrieveAPI('getUser');
  }

}
