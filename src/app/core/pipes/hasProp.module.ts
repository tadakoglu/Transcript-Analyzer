import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasPropPipe } from './hasProp.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HasPropPipe],
  exports: [HasPropPipe],
})
export class HasPropModule { }
