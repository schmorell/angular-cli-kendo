import * as angular from 'angular'
import uiRouter from '@uirouter/angularjs';
import '@progress/kendo-ui';

import { RootModule } from './root/root.module';

export const Ng1AppModule = angular.module('Ng1AppModule', [uiRouter, RootModule.name, 'kendo.directives']);

Ng1AppModule.config(($locationProvider) => {
  $locationProvider.html5Mode(true)
});
