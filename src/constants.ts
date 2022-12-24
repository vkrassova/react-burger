export const API_INGREDIENTS = 'https://norma.nomoreparties.space/api/ingredients'
export const API_ORDER = 'https://norma.nomoreparties.space/api/orders'
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
  IngredientsId = '/ingredients/:id',
}
