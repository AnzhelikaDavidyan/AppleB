import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {StoreService, UserData} from "../../shared/services/store.service";
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../../shared/model/user.model";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    public users: UserModel[] | undefined;

    constructor(private store: StoreService, private route: ActivatedRoute) {
        this.users = this.route.snapshot.data['data'].map((item: UserData) => item.user);
    }

    ngOnInit(): void {
    }

}
