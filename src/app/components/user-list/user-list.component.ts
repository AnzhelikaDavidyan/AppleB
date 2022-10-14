import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../shared/services/store.service";
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../../shared/model/user.model";
import {UserData} from "../../shared/services/initialization.service";
import {map, Observable} from "rxjs";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    public userData: Observable<UserData[]> | undefined = this.store.data?.pipe(
        map(data => [...data.values()])
    );

    constructor(private store: StoreService) {

    }

    ngOnInit(): void {
    }

}
