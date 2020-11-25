import { PermissionType } from './PermissionType';
import { Employee } from './Employee';

export class Permission {
    id?: string;
    employee: Employee = {};
    permissionType?: PermissionType;
    requestDate?: Date;

    constructor() {
        this.employee = new Employee();
    }
}
