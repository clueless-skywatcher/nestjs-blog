import { Controller, Get, Render } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('home')
export class PostViewsController {
    constructor(private readonly postsService: PostsService){}
    
    @Get()
    @Render('home')
    async showAllPosts(){
        const posts = await this.postsService.getPosts();
        return {posts: posts};
    }
}