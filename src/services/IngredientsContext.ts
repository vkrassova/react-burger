import {createContext} from 'react';
import {Ingredients} from '../types/data';

export const IngredientsContext = createContext(new Array<Ingredients>());
