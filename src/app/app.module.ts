import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ExampleComponent } from './example.component';
import { DataService } from './data.service';
import { AppRoutingModule } from './app.routes';

@NgModule({
  imports: [BrowserModule, FormsModule, AppComponent, ToggleComponent, ExampleComponent,AppRoutingModule],
  providers: [DataService]
})

export class AppModule {}