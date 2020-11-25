import axios from "axios";

export class Permission {
    public static async getPermission() {
        return await axios.get("http://localhost:5001/api" + '/permission/all');
    }
    public static async savePermission(data: any) {
        return await axios({
            method: 'POST',
                url: "http://localhost:5001/api/permission",
                    data: data,
                    
        });
    }

    public static async deletePermission(data: any) {
        return await axios({
            method: 'PATCH',
                url: "http://localhost:5001/api/permission",
                    data: data,
                    
        });
    }

    public static async get(id:any) {
        return await axios({
            method: 'GET',
                url: "http://localhost:44331/api/permission/" + id,
                    
        });
    }
}