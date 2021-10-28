import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class UserInfoService {
    private baseUrl: string = 'https://hulu-app-67b3e-default-rtdb.firebaseio.com/';
    private myInfoEndpoint:string = 'my-info.json';

    constructor(private http: HttpClient){

    }

    getUserInfo(){
        console.log()
        return this.http.get<UserInfo>(this.baseUrl + this.myInfoEndpoint);
    }

    modifyUserInfo(data:UserInfo){
       return this.http.put(this.baseUrl + this.myInfoEndpoint, data);
    }
}