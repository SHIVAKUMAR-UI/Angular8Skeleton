import { Component, OnInit, Injectable } from '@angular/core';
import { Sort } from '@angular/material';
import { Tab } from 'src/app/shared/directives/form-elements/tabs/tab/tab.component';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { TabsComponent } from 'src/app/shared/directives/form-elements/tabs/tabs.component';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';
export interface Food {
  userName: string;
  userDate: string;
};

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  selectedTab: Tab;
  
  constructor(private utilityServices: UtilityService, private rolesService: NgxRolesService,
    private permissionsService: NgxPermissionsService) {
    
      const perm = <any>this.rolesService.getRoles();
    console.log(perm);

    // this.permissionsService.loadPermissions(perm);
  }

  logs: string[] = [];


  ngOnInit() {
  }

  add() {
    const assignRoleInstance = this.utilityServices.openModal(this.selectedTab.tabCode, null);
    assignRoleInstance.result.then((user_) => {
      if (user_) {

      }

    }).catch(() => { });
  }

  selectedAdminTab(selectedTab: Tab) {
    this.selectedTab = selectedTab;
  }


}
