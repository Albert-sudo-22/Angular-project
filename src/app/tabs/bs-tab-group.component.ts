import { Component } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-bs-tab-group',
    imports:[CommonModule],
    templateUrl: './bs-tab-group.component.html',
    providers:[
      {
        provide:TabGroupComponent,
        useExisting: BsTabGroupComponent,
      }
    ]
  })
  export class BsTabGroupComponent extends TabGroupComponent {}