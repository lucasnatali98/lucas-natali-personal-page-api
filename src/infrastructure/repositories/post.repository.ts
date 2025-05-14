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
          authorId: post.authorId,
          categories: [],
          published: post.published,
          slug: post.slug,
          tags: [],
        })
    );
  }
}
