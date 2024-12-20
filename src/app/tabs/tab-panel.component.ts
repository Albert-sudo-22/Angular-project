import { Component, OnInit, OnDestroy, Input, ViewChild, TemplateRef, ContentChild } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";
import { TabContentDirective } from "./tab-content.directive";

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
    @ViewChild(TemplateRef, { static: true }) implicitBody: TemplateRef<unknown> | undefined;
    @ContentChild(TabContentDirective, { static: true, read: TemplateRef })
    explicitBody: TemplateRef<unknown> | undefined; // Use TemplateRef<unknown> directly here

    constructor(private tabGroup: TabGroupComponent) {}

    get panelBody(): TemplateRef<unknown> {
       return this.explicitBody || this.implicitBody!;
    }

    
    ngOnInit() {
      this.tabGroup.addTabPanel(this);
    }
    ngOnDestroy() {
      this.tabGroup.removeTabPanel(this);
    }
  }