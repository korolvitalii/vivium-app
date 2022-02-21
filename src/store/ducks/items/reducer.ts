import moment from 'moment';
import { IBook, LoadingStatus } from '../../types';
import { ItemsActions, ItemsActionsType } from './actionTypes';
import { ItemsState } from './contracts/state';

const initialState: ItemsState = {
  data: undefined,
  status: LoadingStatus.NEVER,
};

type InitialStateType = typeof initialState;

export const itemsReducer = (state = initialState, action: ItemsActions): InitialStateType => {
  switch (action.type) {
    case ItemsActionsType.SET_ITEMS: {
      const itemsWithRandomTimestamp = action.payload?.reduce((acc: IBook[], item: IBook) => {
        const randomDate: string = moment(
          new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
        ).format('MM/DD/YYYY');
        return [...acc, { ...item, timestamp: randomDate }];
      }, []);
      return { ...state, data: itemsWithRandomTimestamp };
    }
    case ItemsActionsType.SET_LOADING_STATE: {
      return { ...state, status: action.payload };
    }
    default:
      return state;
  }
};
