import { Post } from "../../domain/entities/Post";
import { BaseRepository } from "./base.repository";

export class PostRepository extends BaseRepository<Post> {
  constructor() {
    super("post");
  }

  async findByAuthorId(authorId: string): Promise<Post[]> {
    const posts = await this.prisma.post.findMany({
      where: { authorId },
    });

    return posts.map(
      (post) =>
        new Post({
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          readTime: post.readTime,
          authorId: post.authorId,
          published: post.published,
          slug: post.slug,
          categoryId: post.categoryId,
          tagId: post.tagId,
        })
    );
  }
}
