import { ComponentsModule } from './components/components.module';

export const AppModule = angular
  .module('testApp', [
    'ngResource',
    ComponentsModule
  ])
  .name;