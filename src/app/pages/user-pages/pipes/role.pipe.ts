import {Pipe, PipeTransform} from '@angular/core';
import {Role} from '../../../core/models/current-user.model';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: Role): string;
  transform(value?: Role): string | undefined {
    if (value === undefined) {
      return undefined;
    }

    switch (value) {
      case Role.USER:
        return 'User';
      case Role.DELIVERY:
        return 'Delivery';
      case Role.ADMIN:
        return 'Admin';
    }
  }

}
