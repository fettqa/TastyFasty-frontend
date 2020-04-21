import { Pipe, PipeTransform } from '@angular/core';
import {Status} from '../../basket/models/status';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: Status): string {
    switch (value) {
      case Status.GET_THE_ORDER: return 'get the order';
      case Status.ON_THE_WAY_TO_CUSTOMER: return 'on the way to customer';
      case Status.READY: return 'ready';
      case Status.STARTED_MAKING: return 'making stared';
      case Status.TO_RESTAURANT: return 'to restaurant';
      case Status.WAITING_FOR_CUSTOMER: return 'waiting for customer';
      case Status.WAITING_FOR_DELIVERYMAN: return 'waiting for delivery';
    }
    return null;
  }

}
