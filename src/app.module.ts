import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [CoursesModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
