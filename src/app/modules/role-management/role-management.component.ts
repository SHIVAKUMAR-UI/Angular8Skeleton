import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AdministratorService } from 'src/app/shared/services';
import { ToastrService } from 'ngx-toastr'
import { of } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {

  eventPageSize = 5;
  dataSource = new MatTableDataSource();
  displayedColumns = ['name', 'description', 'status', 'modifyordelete'];
  _pageSize = 5;
  _pageIndex: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  roleList: any;

  constructor(private administratorService: AdministratorService, private toastrService: ToastrService,
    private loadingService: LoadingService,
    private utilityServices: UtilityService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.loadingService.setLoader(of(true));
    this.administratorService.getRoleList().subscribe((response) => {
      this.roleList = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.loadingService.setLoader(of(false));
    }, (error) => {
      this.dataSource = null;
      this.loadingService.setLoader(of(false));
      this.toastrService.error('Unable to Fetch Role Data', 'Fail');
    });

  }

  onPaginationChange(event) {
    this.sort = this.dataSource.sort;
    this.paginator = this.dataSource.paginator;
    if (event.length < 6 && event.pageIndex === 0) {
      this._pageSize = 5;
      return false;
    }
    // if (!this.allusers.last) {
    //   if ((this.allusers.content.length - ((event.pageIndex + 1) * event.pageSize)) <= 15) {
    //     if (this.allusers && this.allusers.last === false) {
    //       this.allUserDetailsSubscription.unsubscribe();
    //       this.getAllUserDetails(this.allusers.number + 1);
    //     }
    //   }
    // }

    this._pageSize = event.pageSize;
    this._pageIndex = event.pageIndex;
    // localStorage.setItem('eventPageIndex', this._pageIndex.toString());

  }

  deleteRole(role: any) {
    this.loadingService.setLoader(of(true));
    this.administratorService.deleteRole(role.id).subscribe(() => {
      this.loadingService.setLoader(of(false));
      this.updateRoleRow(role, 'delete');
      this.toastrService.success(`Role ${role.name} has been deleted`, 'Success');
    }, (error) => {
      this.loadingService.setLoader(of(false));
      this.toastrService.error('Unable to Delete Role', 'Fail');
    });
  }

  editRole(role: any) {
    const assignRoleInstance = this.utilityServices.openModal('Role', role);
    assignRoleInstance.result.then((user_) => {
      if (user_) {

      }

    }).catch(() => { });
  }

  updateRoleRow(role: any, type: string) {

    let selectedRowIndex = this.roleList.findIndex((role_) => {
      return role_.id === role.id;
    });

    if (type === 'update') {
      this.roleList[selectedRowIndex] = role;

    } else if (type === 'delete') {
      this.roleList.splice(selectedRowIndex, 1);
    }

    this.dataSource = new MatTableDataSource(this.roleList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
