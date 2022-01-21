import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from 'src/app/core/core.module';
import { HasPropModule } from 'src/app/core/pipes/hasProp.module';

import AnalyzerComponent from './analyzer.component';
@NgModule({
    declarations: [ AnalyzerComponent ],
    imports: [
        CoreModule,
        ReactiveFormsModule,
        HasPropModule
    ]
})
export class AnalyzerModule {}
