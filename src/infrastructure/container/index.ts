import { container } from 'tsyringe';
import { UserRepository } from '../repositories/user.repository';
import { PostRepository } from '../repositories/post.repository';
import { NewsletterRepository } from '../repositories/newsletter.repository';
import { UserController } from '../../presentation/controllers/user.controller';
import { PostController } from '../../presentation/controllers/post.controller';
import { NewsletterController } from '../../presentation/controllers/newsletter.controller';

// Register repositories
container.registerSingleton('UserRepository', UserRepository);
container.registerSingleton('PostRepository', PostRepository);
container.registerSingleton('NewsletterRepository', NewsletterRepository);

// Register controllers
container.registerSingleton('UserController', UserController);
container.registerSingleton('PostController', PostController);
container.registerSingleton('NewsletterController', NewsletterController);

export { container }; 