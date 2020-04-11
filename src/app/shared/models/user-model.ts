import {PersonalInfo} from "./personal-info-model";
import {Role} from "../../core/models/current-user.model";

export interface User {
  id?: number;
  username: string;
  password: string;
  role: Role;
  personalInfo: PersonalInfo;
}

