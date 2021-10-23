import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'rules', component: RulesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
