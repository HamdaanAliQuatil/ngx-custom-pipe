import { Component } from '@angular/core';
import { NumberToWordsPipe, PiiMaskerPipe } from 'projects/ngx-custom-pipe/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 123456789;
  
  constructor(
    private numberToWordsPipe: NumberToWordsPipe,
    private piiMaskerPipe: PiiMaskerPipe
  ) {
    console.log(this.piiMaskerPipe.transform('1234567890', 'phone', { unmaskedCount: 4 }));
    console.log(this.numberToWordsPipe.transform(this.title, 'INR'));
  }
}
