import { LoadingStatus, IBook } from '../../../types';

export interface ItemsState {
  data: IBook[] | undefined;
  status: LoadingStatus;
}
