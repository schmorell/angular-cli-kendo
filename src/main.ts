import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

import { Ng1AppModule } from './app/ng1-app.module';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  (<any>ref.instance).upgrade.bootstrap(document.body, [Ng1AppModule.name]);
});
