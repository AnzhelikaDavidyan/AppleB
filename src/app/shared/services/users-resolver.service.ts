import {Injectable} from '@angular/core';
import {UserModel} from '../model/user.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {delay, map, Observable, zip} from 'rxjs';
import {UserService} from "./user.service";
import {PostModel} from "../model/post.model";
import {PostService} from "./post.service";
import {buildUsersMap, initPostData} from "../util/user-transform.util";

@Injectable({
    providedIn: 'root'
})
export class UsersResolverService implements Resolve<UserData[]> {

    constructor(private userService: UserService, private postService: PostService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserData[]> |
        Promise<UserData[]> | UserData[] {
        return zip(this.userService.getUsers(), this.postService.getPosts())
            .pipe(
                map(([users, posts]: [UserModel[], PostModel[]]) => {
                    return [...initPostData(buildUsersMap(users), posts).values()] as UserData[];
                }),
                // delay(3000)
            );
    }
}

export interface UserData {
    user: UserModel;
    posts: PostModel[];
}
