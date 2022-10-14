import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {PostService} from "./post.service";
import {delay, map, Observable, of, tap, zip} from "rxjs";
import {UserModel} from "../model/user.model";
import {PostModel} from "../model/post.model";
import {buildUsersMap, initPostData} from "../util/user-transform.util";
import {StoreService} from "./store.service";

@Injectable({
    providedIn: 'root'
})
export class InitializationService {

    constructor(private userService: UserService, private postService: PostService,
                private store: StoreService) {
    }

    public load(): Observable<any> {
        return zip(this.userService.getUsers(), this.postService.getPosts())
            .pipe(
                map(([users, posts]: [UserModel[], PostModel[]]) => {
                    return initPostData(buildUsersMap(users), posts);
                }),
                tap((userData: Map<number, UserData>) => {
                    this.store.data = of(userData);
                }),
                // delay(2000)
            );
    }
}

export interface UserData {
    user: UserModel;
    posts: PostModel[];
}
