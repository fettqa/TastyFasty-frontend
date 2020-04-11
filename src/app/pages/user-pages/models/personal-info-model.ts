import {Address} from '../../../features/restaurant/models/address-model';

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  middleName?: string;
  address: Address;
  phoneNumber: number;
  img: number[];
}
