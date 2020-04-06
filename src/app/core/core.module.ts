import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LOGGING_INTERCEPTOR} from './interceptors/logging.interceptor';


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
