import { Component, OnInit, OnDestroy, Input, ViewChild, TemplateRef } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";

@Component({
    selector: 'app-tab-panel',
    template: `
      <ng-template>
        <ng-content></ng-content>
      </ng-template>
    `,
    styles: [''],
  })
  export class TabPanelComponent implements OnInit, OnDestroy {
    @Input() title!: string;
    @ViewChild(TemplateRef, { static: true }) panelBody!: TemplateRef<unknown>;
    constructor(private tabGroup: TabGroupComponent) {}
  
    ngOnInit() {
      this.tabGroup.addTabPanel(this);
    }
    ngOnDestroy() {
      this.tabGroup.removeTabPanel(this);
    }
  }