import { Routes } from '@angular/router';
import AnalyzerComponent from './analyzer/analyzer.component';
import MainComponent from './main.component';


export const ROUTES: Routes = [{
    path: '',
    component: MainComponent,
    children: [{ path: '', component: AnalyzerComponent}]
}];
