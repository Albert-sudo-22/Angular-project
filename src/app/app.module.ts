import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppComponent, ToggleComponent],
})

export class AppModule {}