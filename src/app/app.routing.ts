import {Routes} from "@angular/router";
import {USER_LIST_URL} from "./shared/constant";
import {UserListComponent} from "./components/user-list/user-list.component";
import {UsersResolverService} from "./shared/services/users-resolver.service";

export const routes: Routes = [
    {
        path: "",
        component: UserListComponent, resolve: {data: UsersResolverService}
    },
    {path: USER_LIST_URL, component: UserListComponent, resolve: {data: UsersResolverService}},
    // {
    //     path: "",
    //     component: AppComponent,
    //     children: [
    //         {
    //             // path: USER_POST_URL,
    //             // loadChildren: () => import("./user-post/user-post.module").then(m => m.UserPostModule),
    //         }
    //     ]
    // },
    // {
    //     path: "**",
    //     redirectTo: USER_LIST_URL
    // }
];
