import { Component } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-bs-tab-group',
    imports:[CommonModule],
    template: `
    <ul class="nav nav-tabs">
  <li class="nav-item" *ngFor="let tab of tabPanelList; let idx = index">
    <a
      class="nav-link"
      [class.active]="idx === tabActiveIndex"
      (click)="tabActiveIndexChange.emit(idx)"
    >
      {{ tab.title }}
      <button class = "btn btn-danger" (click)="removeTabPanel(tab)">x</button>
    </a>
  </li>
</ul>

    <div class = "tab-body" *ngIf="tabPanelList.length; else noTabs">
        <ng-container *ngTemplateOutlet="tabPanelList[tabActiveIndex].panelBody">
        </ng-container>
    </div>

    <ng-template #noTabs>
    No more tabs.
  </ng-template>
    `,
  })
  export class BsTabGroupComponent extends TabGroupComponent {}