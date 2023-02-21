export const BASE_URL = 'https://norma.nomoreparties.space/api'
export const wsUrl = 'wss://norma.nomoreparties.space'
export const INGREDIENT_TYPES = {
  buns: 'buns',
  sauces: 'sauces',
  main: 'main',
}

export enum AppRoutes {
  Main = '/',
  SignIn = '/login',
  Register = '/register',
  ForgotPassword = '/forgot-password',
  ResetPassword = '/reset-password',
  Profile = '/profile',
  ProfileOrders = '/profile/orders',
  ProfileOrdersId = '/profile/orders/:id',
  IngredientsId = '/ingredients/:id',
  Feed = '/feed',
  FeedId = '/feed/:id',
}
