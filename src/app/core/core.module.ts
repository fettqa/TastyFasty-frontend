import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LOGGING_INTERCEPTOR} from './interceptors/logging.interceptor';
import {LOAD_CURRENT_USER_INITIALIZER} from './services/current-user.service';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [UserMenuComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        RouterModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        LayoutModule
    ],
  providers: [
    LOGGING_INTERCEPTOR,
    LOAD_CURRENT_USER_INITIALIZER,
  ],
  exports: [
    UserMenuComponent
  ]
})
export class CoreModule {
}
