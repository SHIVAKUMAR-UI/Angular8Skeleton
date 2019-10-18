import { NgbModalRef, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserComponent } from "src/app/modules/user-management/user/user.component";
import { modalClass } from "../constants/constants";
import { Injector, Injectable } from "@angular/core";
import { ModalOptions } from "ngx-bootstrap";
import { RoleComponent } from "src/app/modules/role-management/role/role.component";
import { OrganizationComponent } from "src/app/modules/organization-list/organization/organization.component";
import { ConfirmationComponent } from "src/app/login/forgot-password/confirmation/confirmation.component";

const components: { [type: string]: any } = {
    User: UserComponent,
    Role: RoleComponent,
    Organization: OrganizationComponent,
    confirmationPassword: ConfirmationComponent
};

@Injectable()
export class UtilityService {

    constructor(private modalService: NgbModal, private injector: Injector) {

    }

    public openModal(tabName?: string, data?: any): NgbModalRef {
        let component: any = components[tabName];

        return this.modalService.open(component, {
            centered: true,
            backdrop: 'static',
            keyboard: false,
            size: 'lg',
            windowClass: modalClass[tabName],
            injector: Injector.create([{
                provide: ModalOptions,
                useValue: {
                    data: data,
                }
            }], this.injector)
        });
    };
}
