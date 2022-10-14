import {Injectable} from '@angular/core';
import {PostService} from "../post.service";
import {Observable} from "rxjs";
import {PostModel} from "../../model/post.model";
import {config} from "../../../../environments/config";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HttpPostService extends PostService {

    constructor(private http: HttpClient) {
        super();
    }

    getPosts(): Observable<PostModel[]> {
        return this.http.get<PostModel[]>(`${config.apiUrl}/${config.POSTS}`);
    }
}
