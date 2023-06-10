import { NgModule } from '@angular/core';
import { NgxCustomPipeComponent } from './ngx-custom-pipe.component';
import { NumberToWordsPipe } from './number-to-words.pipe';



@NgModule({
  declarations: [
    NgxCustomPipeComponent,
    NumberToWordsPipe
  ],
  imports: [
  ],
  exports: [
    NgxCustomPipeComponent,
    NumberToWordsPipe,
  ]
})
export class NgxCustomPipeModule { }
