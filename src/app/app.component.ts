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
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { BsTabGroupComponent } from "./tabs/bs-tab-group.component";
import { CounterComponent } from './counter/counter.component';
import { formatAddressPipe } from './format-address.pipe';
import { AdultPipe } from './adult.pipe';
import './example-RxJS';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, ProgressBarComponent,
    AuthorListComponent, FormsModule, ToggleComponent, FlexComponent,
    CommonModule, ExampleComponent, TabGroupComponent, TabPanelComponent, BsTabGroupComponent
  , CounterComponent, formatAddressPipe, AdultPipe],
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
  currentIndex = 0;
  currentDate = new Date;

  users = [{
    name: "Jack",
    age: 30
  },
{
  name: "Bob",
  age: 28
},
{
  name: "James",
  age: 29
},
{
  name: "Jake",
  age: 16
}];

addUser(){
  this.users = [...this.users, {name: 'new user', age: 30}];
}

  addr = {
    address1: "123 Some st",
    address2: "STE100",
    city: "Acme",
    state: "State",
    zip: "12345",
    country: "US"
  };


  formatAddress(addr: { address1: string; address2: string; city: string; state: string; zip: string; country: string; }){
    return addr.address1 + " " + addr.address2 + ", " + addr.city + ", " 
    + addr.state + ", " + addr.zip + ", " + addr.country
  }

  @ViewChild('toggleComp') toggleComp!: ToggleComponent;
  toggleInside() {
    this.toggleComp.toggle();
  }

  @ViewChildren(ToggleComponent) toggleList!: QueryList<ToggleComponent>;
  ngAfterViewInit() {
  console.log(this.toggleList);
}
}
