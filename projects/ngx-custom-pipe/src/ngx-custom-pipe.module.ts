import { NgModule } from '@angular/core';
import { NgxCustomPipeComponent } from './lib/number-to-words/ngx-custom-pipe.component';
import { NumberToWordsPipe } from './lib/number-to-words/number-to-words.pipe';
import { PiiMaskerPipe } from './lib/pii-masker/pii-masker.pipe';


@NgModule({
  declarations: [
    NgxCustomPipeComponent,
    NumberToWordsPipe,
    PiiMaskerPipe
  ],
  imports: [
  ],
  exports: [
    NgxCustomPipeComponent,
    NumberToWordsPipe,
    PiiMaskerPipe
  ]
})
export class NgxCustomPipeModule { }
