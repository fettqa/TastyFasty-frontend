export enum Role {
  ADMIN,
  USER,
}

export interface CurrentUser {
  id: string;
  login: string;
  role: Role;
}
