import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import { FlexComponent } from './flex-container.component';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from "./example.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, ProgressBarComponent,
    AuthorListComponent, FormsModule, ToggleComponent, FlexComponent,
    CommonModule, ExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-project';
  name = 'James Bond';
  checked = false;
  questions = {
    question1: true,
    question2: false,
  };

  @ViewChild('toggleComp') toggleComp!: ToggleComponent;
  toggleInside() {
    this.toggleComp.toggle();
  }

  @ViewChildren(ToggleComponent) toggleList!: QueryList<ToggleComponent>;
  ngAfterViewInit() {
  console.log(this.toggleList);
}
}
