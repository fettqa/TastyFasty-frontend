import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LOGGING_INTERCEPTOR} from './interceptors/logging.interceptor';
import {LOAD_CURRENT_USER_INITIALIZER} from './services/current-user.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LOGGING_INTERCEPTOR,
  ],
})
export class CoreModule {
}
