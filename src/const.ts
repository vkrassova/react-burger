export const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const API_INGREDIENTS = 'https://norma.nomoreparties.space/api/ingredients';
export const API_ORDER = 'https://norma.nomoreparties.space/api/orders';
export const INGREDIENT_TYPES = {
    buns: 'buns',
    sauces: 'sauces',
    main: 'main'
}
