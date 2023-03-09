export enum userActions {
  GET_USER_REQUEST = 'GET_USER_REQUEST',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_FAILED = 'GET_USER_FAILED',
}

export enum loginActions {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_FAILED = 'LOGIN_FAILED',
}

export enum registerActions {
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILED = 'REGISTER_FAILED',
}

export enum resetPasswordActions {
  RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST',
  RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED',
}

export enum forgotPasswordActions {
  FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED',
}

export enum updateTokenActions {
  UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST',
  UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED',
}

export enum postUserActions {
  POST_USER_REQUEST = 'POST_USER_REQUEST',
  POST_USER_FAILED = 'POST_USER_FAILED',
  POST_USER_SUCCESS = 'POST_USER_SUCCESS',
}

export enum logoutActions {
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_FAILED = 'LOGOUT_FAILED',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
}
