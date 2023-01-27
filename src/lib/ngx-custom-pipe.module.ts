import { NgModule } from '@angular/core';
import { NgxCustomPipeComponent } from './ngx-custom-pipe.component';
import { NumberToWordsPipe } from './numberToWords/number-to-words.pipe';



@NgModule({
  declarations: [
    NgxCustomPipeComponent,
    NumberToWordsPipe,
  ],
  imports: [
  ],
  exports: [
    NgxCustomPipeComponent
  ]
})
export class NgxCustomPipeModule { }