import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {UserData} from "./initialization.service";

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    public data!: Observable<Map<number, UserData>>;

    public getUserById(id: number): Observable<UserData | undefined> {
        return this.data?.pipe(map(item => item.get(id)))
    }

    constructor() {
    }
}
