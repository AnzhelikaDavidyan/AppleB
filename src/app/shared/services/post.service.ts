import {PostModel} from "../model/post.model";
import {Observable} from "rxjs";

export abstract class PostService {
  abstract getPosts(): Observable<PostModel[]>
}
