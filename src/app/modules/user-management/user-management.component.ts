import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AdministratorService } from 'src/app/shared/services';




@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  eventPageSize = 5;
  dataSource = new MatTableDataSource();
  displayedColumns = ['userName', 'email', 'mobilePhone', 'status', 'modifyordelete'];
  _pageSize = 5;
  _pageIndex: number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  userList: any;

  constructor(private utilityServices: UtilityService,
    private loadingService: LoadingService,
    private toastrService: ToastrService,
    private administratorService: AdministratorService) { }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit() {
    this.loadingService.setLoader(of(true));
    this.administratorService.getUserList().subscribe((response) => {
      this.userList = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.loadingService.setLoader(of(false));
    }, (error) => {
      this.dataSource = null;
      this.loadingService.setLoader(of(false));
      this.toastrService.error('Unable to Fetch User Data', 'Fail');
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

  deleteuser(user: any) {
    this.loadingService.setLoader(of(true));
    this.administratorService.deleteUser(user.id).subscribe(() => {
      this.loadingService.setLoader(of(false));
      this.updateuserRow(user, 'delete');
      this.toastrService.success(`user ${user.name} has been deleted`, 'Success');
    }, (error) => {
      this.loadingService.setLoader(of(false));
      this.toastrService.error('Unable to Delete user', 'Fail');
    });
  }

  editUser(user: any) {
    const assignuserInstance = this.utilityServices.openModal('User', user);
    assignuserInstance.result.then((user_) => {
      if (user_) {

      }

    }).catch(() => { });
  }

  updateuserRow(user: any, type: string) {

    let selectedRowIndex = this.userList.findIndex((user_) => {
      return user_.id === user.id;
    });

    if (type === 'update') {
      this.userList[selectedRowIndex] = user;

    } else if (type === 'delete') {
      this.userList.splice(selectedRowIndex, 1);
    }

    this.dataSource = new MatTableDataSource(this.userList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
