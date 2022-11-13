import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { constructorReducer } from "./constructor";
import { modalReducer } from "./modal";
import { ConstructorActions } from "./constructor";
import { IngredientsActions } from "./ingredients";
import { ModalBaseAction } from "./modal";
import { OrderActions } from "./order";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorList: constructorReducer,
  order: orderReducer,
  modal: modalReducer,
});

export type TApplicationActions =
  | ConstructorActions
  | IngredientsActions
  | ModalBaseAction
  | OrderActions;
