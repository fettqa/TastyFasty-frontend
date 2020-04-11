import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasRoleDirective } from './directives/has-role.directive';
import { NoroleDirective } from './directives/norole.directive';



@NgModule({
  declarations: [HasRoleDirective, NoroleDirective],
  exports: [
    HasRoleDirective,
    NoroleDirective
  ],
  imports: [
    CommonModule
  ]
})
export class PermissionsModule { }
