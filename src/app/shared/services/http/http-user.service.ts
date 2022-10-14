import {Injectable} from '@angular/core';
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {UserModel} from "../../model/user.model";
import {config} from "../../../../environments/config";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HttpUserService extends UserService {

    constructor(private http: HttpClient) {
        super();
    }

    getUsers(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(`${config.apiUrl}/${config.USERS}`);
    }
}
