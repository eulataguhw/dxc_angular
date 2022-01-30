import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilityService } from './utility.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UtilityService
  ]
})
export class SharedModule { }
