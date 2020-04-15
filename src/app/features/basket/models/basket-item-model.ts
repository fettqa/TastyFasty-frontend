import {Breakfast} from "../../breakfast/models/breakfast-model";

export interface BasketItem {
  basketItemID?: number;
  basketID: number;
  breakfast: Breakfast;
  numberOfItems: number;
  readyToOrder: boolean;
}
