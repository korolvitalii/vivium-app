import { instance } from '../../core/axios';
import { IBook } from '../../store/types';

interface IResponse {
  status: number;
  data: IBook[];
}

export const ItemsApi = {
  fetchItems: async (): Promise<IResponse> => {
    const { data } = await instance.get<IResponse>('/books');
    return data;
  },
};
