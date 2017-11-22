/*

Entry Point File
Finally, we need to add one more setup file to your app folder called main.ts.
Known as an entry point, this file is responsible for instructing Angular's SystemJS tool
exactly how to assemble our application when we launch it. It will load our root module,
which then loads our root component.
Again, the word bootstrap above here does not refer to the Bootstrap CSS framework. 
It refers to "bootstrapping", or launching, an application.
We will only ever need one main.ts file. This is the entry point.
That is, the code that launches, or "enters" the application.

*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
