import { UserModule } from './user/user.module';

export const ComponentsModule = angular
  .module('testApp.components', [
    UserModule
  ])
  .name;