import { Component, Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

@Component({
    selector: "hulu-user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit {
    myInfo: UserInfo | undefined;

    constructor(private userInfoService:UserInfoService) {
    }
    ngOnInit(): void {
       console.log("registering showUserInfo as a subscriber")
       this.showUserInfo();

    }

    showUserInfo(){
        this.userInfoService.getUserInfo().subscribe((data) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}