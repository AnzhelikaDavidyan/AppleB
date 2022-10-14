import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {UserService} from "./shared/services/user.service";
import {HttpUserService} from "./shared/services/http/http-user.service";
import {PostService} from "./shared/services/post.service";
import {HttpPostService} from "./shared/services/http/http-post.service";
import {routes} from "./app.routing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
    ],
    providers: [
        {provide: UserService, useClass: HttpUserService},
        {provide: PostService, useClass: HttpPostService},

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
