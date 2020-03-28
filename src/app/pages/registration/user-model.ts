import {Address} from '../restaurants-page/address-model';

export interface User {
  user_id?: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  username: string;
  password: string;
  address: Address;
  phoneNumber: number;
}

