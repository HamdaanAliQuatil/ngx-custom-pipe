import { Component } from '@angular/core';
import { NumberToWordsPipe } from 'projects/ngx-custom-pipe/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 123456789;
  
  constructor(private numberToWordsPipe: NumberToWordsPipe) {
    console.log(this.numberToWordsPipe.transform(this.title, 'INR'));
  }
}
