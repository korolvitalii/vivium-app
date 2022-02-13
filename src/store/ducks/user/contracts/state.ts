import { IUser, LoadingStatus } from '../../../types';

export interface UserState {
  data: IUser | undefined;
  status: LoadingStatus;
}
