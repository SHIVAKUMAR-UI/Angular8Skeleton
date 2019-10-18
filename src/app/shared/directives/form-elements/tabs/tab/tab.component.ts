import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, Tab {

  @Input() tabTitle;
  @Input() selected;
  @Input() tabCode;

  constructor(private tabsComponent: TabsComponent) { }

  ngOnInit() {
    this.tabsComponent.addTab(this);
  }
}

export interface Tab {
  tabCode: string;
  tabTitle: string;
  selected?: boolean;
}
