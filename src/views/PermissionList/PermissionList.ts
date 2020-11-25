import { Component, Vue } from "vue-property-decorator";
import { Permission as PermissionModel } from '@/models/Permission';
import { Permission as PermissionApi } from "@/core/api/permission"  

@Component
export default class Permission extends Vue {

  public permissionsData: any;
  constructor() {
    super();
    this.permissionsData = [];
  }

  async mounted() {
    const data =  await PermissionApi.getPermission();
    this.permissionsData = data.data;
  }

  edit(index: number, data: PermissionModel[]) {
    const id = data[index].id;
    this.$router.push(`/edit/${id}`);
  }

  remove(index: number, data: PermissionModel[]) {
    // Modify data
    this.permissionsData = [];
  }
}
