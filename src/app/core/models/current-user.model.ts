export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  DELIVERY = 'DELIVERY'
}

export interface AnonymousUser {
  authenticated: false;
}

export interface LoggedUser {
  authenticated: true;
  info: {
    id: number,
    username: string;
    role: Role;
  };
}

export type CurrentUser = AnonymousUser | LoggedUser;
