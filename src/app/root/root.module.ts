import * as angular from 'angular';

import { NgModule } from '@angular/core';
import { RootComponent } from './root.component';

export const RootModule = angular.module('RootModule', []);
RootModule.component('g6Root', RootComponent);
RootModule.config(($stateProvider) => {
  $stateProvider.state('root', {
    url: '/',
    component: 'g6Root'
  });
});

// techncially, this is not required, but it is nice to have it for consistency
@NgModule({})
    export class MenuNgModule {
}
