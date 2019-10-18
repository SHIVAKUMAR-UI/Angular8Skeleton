import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/shared/directives/form-elements/tabs/tab/tab.component';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  chartData: Array<any>;
  constructor() { }

  logs: string[] = [];

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 5000);
    }, 1000);

  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }


  log(selectedTab: Tab) {
    this.logs.push('Selected Tab with title: ' + selectedTab.tabTitle);
  }

}
