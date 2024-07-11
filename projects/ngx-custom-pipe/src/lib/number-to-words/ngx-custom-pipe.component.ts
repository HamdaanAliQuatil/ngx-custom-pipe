import { Component } from '@angular/core';

@Component({
  selector: 'lib-ngx-custom-pipe',
  template: `
    <p>
      ngx-custom-pipe works! {{ 123456789 | numberToWords:'INR' }}
    </p>
  `,
  styles: [
  ]
})
export class NgxCustomPipeComponent {

}
