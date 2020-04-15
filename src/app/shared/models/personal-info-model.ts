import {Address} from './address-model';

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  middleName?: string;
  address: Address;
  phoneNumber: number;
  img: number[];
}
