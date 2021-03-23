import { IFood } from "./food.interface";

export type NewFood = Omit<IFood, 'id'>;