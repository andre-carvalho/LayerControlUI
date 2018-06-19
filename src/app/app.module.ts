import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule,
          MatFormFieldModule,
          MatInputModule,
          MatIconModule,
          MatToolbarModule,
          MatSliderModule,
          MatButtonModule,
          MatRadioModule,
          MatSlideToggleModule,
          MatCardModule } from '@angular/material';

import { LayerToolsComponent } from './layer-tools/layer-tools.component';
import { LayerGroupComponent } from './layer-group/layer-group.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LayerToolsComponent,
    LayerGroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatButtonModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
