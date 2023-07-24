export * from './UserService';

import { container } from 'tsyringe';
import * as services from 'services';
container.register('UserService', services.UserService);
