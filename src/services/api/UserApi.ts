import { ISignInFormData } from '../../components/SignInForm';
import { instance } from '../../core/axios';

export interface SignInResponse {
  name: string;
  email: string;
  token: string;
}

export interface AuthMeResponse {
  name: string;
  email: string;
  token: string;
  notifications: boolean;
  lastLogin: string;
}

interface IResponse<T> {
  status: string;
  data: T;
}

export const UserApi = {
  signIn: async (userData: ISignInFormData): Promise<IResponse<SignInResponse>> => {
    const { data } = await instance.put<IResponse<SignInResponse>>('/users/token', userData);
    return data;
  },
  authMe: async (email?: string | undefined): Promise<IResponse<AuthMeResponse>> => {
    const { data } = await instance.get<IResponse<AuthMeResponse>>(`/users/${email}`);
    return data;
  },
};
