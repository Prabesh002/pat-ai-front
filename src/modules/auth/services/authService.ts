import { apiCaller } from '@/api/caller/apiCaller';
import { AUTH_REGISTER_ENDPOINT, AUTH_LOGIN_ENDPOINT } from '../api/routes/authApiRoutes';
import { RegisterRequest } from '../api/models/RegisterRequest';
import { LoginRequest } from '../api/models/LoginRequest';
import { AccessTokenDto } from '../api/models/AccessTokenDto';
import { UserResponse } from '../api/models/UserResponse';
import useLocalStorage from '@/modules/core/hooks/useLocalStorage';
import { ACCESS_TOKEN_KEY } from '../constants';



export const useAuthService = () => {
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(ACCESS_TOKEN_KEY, null);

  const register = async (data: RegisterRequest): Promise<UserResponse> => {
    const response = await apiCaller<AccessTokenDto>({
      url: AUTH_REGISTER_ENDPOINT,
      method: 'POST',
      data,
    });
    setAccessToken(response.access_token);
    return response.user_response;
  };

  const login = async (data: LoginRequest): Promise<UserResponse> => {
    const response = await apiCaller<AccessTokenDto>({
      url: AUTH_LOGIN_ENDPOINT,
      method: 'POST',
      data,
    });
    setAccessToken(response.access_token);
    return response.user_response;
  };

  const logout = () => {
    setAccessToken(null);
  };

  return { register, login, logout, accessToken };
};