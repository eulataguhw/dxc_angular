import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoleGuardGuard } from './role-guard.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UserBoardComponent } from './user-board/user-board.component';

const routes: Routes = [
  { path: '',  redirectTo: 'login', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'userboard', component: UserBoardComponent, canActivate: [RoleGuardGuard] },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent},
  { path: 'unauthorized', pathMatch: 'full', component: UnauthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
