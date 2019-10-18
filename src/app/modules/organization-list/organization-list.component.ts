import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastrService } from 'ngx-toastr';
import { AdministratorService } from 'src/app/shared/services';
import { of } from 'rxjs';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  eventPageSize = 5;
  dataSource = new MatTableDataSource(); 
  displayedColumns = ['orgName', 'orgType', 'descripiton', 'status', 'modifyordelete'];
  _pageSize = 5;
  _pageIndex: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  orgList: any;

  constructor(private utilityServices: UtilityService,
    private loadingService: LoadingService,
    private toastrService: ToastrService,
    private administratorService: AdministratorService) { }

  ngOnInit() {
    this.loadingService.setLoader(of(true));
    this.administratorService.getOrgList().subscribe((response) => {
      this.orgList = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.loadingService.setLoader(of(false));
    }, (error) => {
      this.dataSource = null;
      this.loadingService.setLoader(of(false));
      this.toastrService.error('Unable to Fetch Organization Data', 'Fail');
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
  
  deleteOrg(org: any) {
    this.loadingService.setLoader(of(true));
    this.administratorService.deleteOrg(org.id).subscribe(() => {
      this.loadingService.setLoader(of(false));
      this.updateOrgRow(org, 'delete');
      this.toastrService.success(`Organization ${org.name} has been deleted`, 'Success');
    }, (error) => {
      this.loadingService.setLoader(of(false));
      this.toastrService.error(`Unable to Delete Organization ${org.name}`, 'Fail');
    });
  }

  editOrg(org: any) {
    const assignOrgInstance = this.utilityServices.openModal('Organization', org);
    assignOrgInstance.result.then((org_) => {
      if (org_) {

      }

    }).catch(() => { });
  }

  updateOrgRow(org: any, type: string) {

    let selectedRowIndex = this.orgList.findIndex((org_) => {
      return org_.id === org.id;
    });

    if (type === 'update') {
      this.orgList[selectedRowIndex] = org;

    } else if (type === 'delete') {
      this.orgList.splice(selectedRowIndex, 1);
    }

    this.dataSource = new MatTableDataSource(this.orgList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
