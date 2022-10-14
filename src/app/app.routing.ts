import {Routes} from "@angular/router";
import {USER_LIST_URL} from "./shared/constant";
import {UserListComponent} from "./components/user-list/user-list.component";

export const routes: Routes = [
    {
        path: "",
        component: UserListComponent
    },
    {path: USER_LIST_URL, component: UserListComponent},
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
