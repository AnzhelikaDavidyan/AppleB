import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {UserModel} from "../model/user.model";
import {PostModel} from "../model/post.model";

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    private _data!: Observable<Map<number, UserData>>;

    get data(): Observable<Map<number, UserData>> {
        return this._data!;
    }

    set data(value: Observable<Map<number, UserData>>) {
        this._data = value;
    }

    public getUserById(id: number): Observable<UserData | undefined> {
        return this._data?.pipe(map(item => item.get(id)))
    }

    constructor() {
    }
}

export interface UserData {
    user: UserModel;
    posts: PostModel[];
}
