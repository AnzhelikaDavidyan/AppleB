import {APP_INITIALIZER, NgModule} from '@angular/core';
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
import {InitializationService} from "./shared/services/initialization.service";
import { UserPostComponent } from './components/user-post/user-post.component';

export function loadData(initializationService: InitializationService) {
    return () => initializationService.load();
}

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserPostComponent
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
        {
            provide: APP_INITIALIZER,
            useFactory: loadData,
            deps: [InitializationService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
