import {Observable} from "rxjs";
import {UserModel} from "../model/user.model";

export abstract class UserService {
  abstract getUsers(): Observable<UserModel[]>
}
