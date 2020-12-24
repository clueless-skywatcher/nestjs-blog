import { Controller, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';


@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {
        
    }

    @Post()
    addPost(
        @Body('title') postTitle: string, 
        @Body('description') postDescription: string
    ): any {
        return this.postService.insertPost(postTitle, postDescription);
    }
}
