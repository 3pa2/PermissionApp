import { Component, Prop, Vue } from "vue-property-decorator";
import { Permission as PermissionEmployee } from '@/models/Permission';
import { Employee } from '@/models/Employee';
import { Permission as PermissionApi } from "@/core/api/permission"  

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'Este campo es requerido'
});
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

@Component
export default class Permission extends Vue {

  private permission: PermissionEmployee;
  private errorMessage = "";

  constructor() {
    super();
    this.permission = new PermissionEmployee();
    this.permission.employee = {} as Employee;
  }

  async save() {
    await PermissionApi.savePermission(this.permission); 
    this.$router.push({ name: "List" });
  }

  pickerOptions = {
    disabledDate(date: Date) {
      return date > new Date();
    }
  }


}
