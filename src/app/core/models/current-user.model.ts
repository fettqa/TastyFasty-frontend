export enum Role {
  ADMIN = 'ROLE_ADMIN', USER = 'ROLE_USER', DELIVERY_MAN = "DELIVERY_MAN"
}

export interface AnonymousUser {
  authenticated: false;
}

export interface LoggedUser {
  authenticated: true;
  info: {
    username: string;
    roles: Role[];
  };
}

export type CurrentUser = AnonymousUser | LoggedUser;
