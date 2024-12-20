import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TabPanelComponent } from "./tab-panel.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-tab-group',
    templateUrl: './tab-group.component.html',
    imports: [CommonModule],
    styleUrl: './tab-group.component.css'
  })
  export class TabGroupComponent implements OnInit {  
    tabPanelList: TabPanelComponent[] = [];
  
    @Input() tabActiveIndex = 0;
    @Output() tabActiveIndexChange = new EventEmitter<number>();
    constructor() {}
  
    ngOnInit() {}
  
    selectItem(idx: number) {
      this.tabActiveIndex = idx;
      this.tabActiveIndexChange.emit(idx);
    }
  
    addTabPanel(tab: TabPanelComponent) {
      this.tabPanelList.push(tab);
    }
    removeTabPanel(tab: TabPanelComponent) {
      let index = -1;
      const tabPanelList: TabPanelComponent[] = [];
      this.tabPanelList.forEach((item, idx) => {
        if (tab === item) {
          index = idx;
          return;
        }
        tabPanelList.push(item);
      });
      this.tabPanelList = tabPanelList;
      if (index !== -1) {
        this.selectItem(0);
      }
    }
  }