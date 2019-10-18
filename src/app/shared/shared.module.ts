import { NgModule } from '@angular/core';

import { LoadingComponent } from './directives/loading/loading.component';
import { BarchartComponent } from './directives/charts/barchart/barchart.component';
import { MiserablesComponent } from './directives/charts/miserables/miserables.component';
import { GridTableComponent } from './directives/grid-table/grid-table.component';



@NgModule({
    declarations: [
        BarchartComponent,
        MiserablesComponent,
        GridTableComponent,
    ],
    imports: [

    ],
    exports: [
        BarchartComponent,
        MiserablesComponent,
        GridTableComponent,
    ]
})
export class SharedModule { }
