import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  tabs: Tab[] = [];
  @Output() selected = new EventEmitter();

  addTab(tab: Tab) {
    if (!this.tabs.length) {
      tab.selected = true;
      this.selected.emit({ selectedTab: tab });
    }
    this.tabs.push(tab);
  }

  selectTab(tab: Tab) {
    this.tabs.map((tab) => {
      tab.selected = false;
    });
    tab.selected = true;
    this.selected.emit({ selectedTab: tab });
  }
}


export interface Tab {
  tabTitle: string;
  selected: boolean;
}
