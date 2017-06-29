import * as angular from 'angular'
import uiRouter from 'angular-ui-router';

import { RootModule } from './root/root.module';

export const Ng1AppModule = angular.module('Ng1AppModule', [uiRouter, RootModule.name]);

Ng1AppModule.config(($locationProvider) => {
  $locationProvider.html5Mode(true)
});
