import {PersonalInfo} from './personal-info-model';

export interface User {
  id?: number;
  username: string;
  password: string;
  role: string;
  personalInfo: PersonalInfo;
}

