import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-example',
  template: `<h1>{{ data }}</h1>`,
})
export class ExampleComponent {
  data: string;

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData(); // Dependency injection in action
  }
}
