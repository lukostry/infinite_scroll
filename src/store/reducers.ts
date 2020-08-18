import { combineReducers } from 'redux';

import { Offer } from '../dto';

export interface OffersState {
  loading: boolean;
  offers: Array<Offer>;
}

export interface State {
  offersReducer: OffersState;
};

interface Action {
  type: string;
  payload: Array<Offer>;
}

export enum OffersActionType {
  FetchedOffers = 'FETCHED_OFFERS',
}

const initialState: OffersState = {
  loading: false,
  offers: []
};

const offersReducer = (state: OffersState = initialState, action: Action): OffersState => {
  switch (action.type) {
    case OffersActionType.FetchedOffers:
      return { loading: false, offers: [...state.offers, ...action.payload] };
    default:
      return state;
  }
}

export const rootReducer = combineReducers<State>({
  offersReducer
});
