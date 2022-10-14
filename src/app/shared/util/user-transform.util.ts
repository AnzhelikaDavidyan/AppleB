import {UserModel} from "../model/user.model";
import {UserData} from "../services/users-resolver.service";
import {PostModel} from "../model/post.model";

export const buildUsersMap = (users: UserModel[]): Map<number, UserData> => {
    return users.reduce((a: any, b: UserModel) => {
        return (a.get(b.id) ?? a.set(b.id, {user: b, posts: []}))
    }, new Map<number, UserData>());
}

export const initPostData = (users: Map<number, UserData>, posts: PostModel[]): Map<number, UserData> => {
    posts.forEach((post) => {
        if (users.has(post.userId)) {
            users.get(post.userId)!.posts.push(post);
        } else {
            users.set(post.userId, {user: {id: -1, name: 'Unknown User'} as UserModel, posts: []});
        }
    })
    return users;
}

