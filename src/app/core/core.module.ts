import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider'
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FlexModule,
        MatTooltipModule,
        MatSelectModule,
        MatSliderModule,
        MatIconModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FlexModule,
        MatTooltipModule,
        MatSelectModule,
        MatSliderModule,
        MatIconModule,
        FormsModule
    ]
})
export class CoreModule { }
