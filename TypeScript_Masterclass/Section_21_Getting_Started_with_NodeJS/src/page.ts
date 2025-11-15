import { inject, injectable } from 'inversify';
import { User } from './user';

@injectable()
export class Page {
  constructor(@inject(User) private user: User) {}

  public createPage(url: string): string {
    return `Page created with URL: ${url} by user: ${this.user}`;
  }
}
