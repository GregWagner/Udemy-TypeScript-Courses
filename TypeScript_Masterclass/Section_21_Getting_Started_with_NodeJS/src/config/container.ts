import { Container } from 'inversify';
import { Page } from '../page';
import { User } from '../user';

export const container: Container = new Container();

container.bind(User).toSelf().inSingletonScope();
container.bind(User).toSelf().inTransientScope();
