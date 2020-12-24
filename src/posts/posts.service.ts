import { Injectable } from '@nestjs/common';

import { Post } from './posts.model';

@Injectable()
export class PostsService {
    posts: Post[] = [];

    insertPost(title: string, description: string){
        const id = new Date().toString();
        const post = new Post(id, title, description);
        this.posts.push(post);
        return id;
    }
}
