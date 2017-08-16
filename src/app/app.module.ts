import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { MenuComponent } from './components/menu.component';
import { EncoderComponent } from './components/encoder.component';
import { DecoderComponent } from './components/decoder.component';

import { routing } from '../app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EncoderComponent,
    DecoderComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
