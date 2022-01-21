import { Component } from '@angular/core';
import {AfterViewInit, ChangeDetectionStrategy, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AppComponent {}
