import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCustomPipeModule } from 'ngx-custom-pipe';
import { NumberToWordsPipe, PiiMaskerPipe } from 'projects/ngx-custom-pipe/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCustomPipeModule
  ],
  providers: [NumberToWordsPipe, PiiMaskerPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
