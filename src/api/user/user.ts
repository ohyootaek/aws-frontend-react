import axiosInstance from "../../api/axiosInstance";
import { UserResponse } from "../../api/user/model/userDto";

/**
 * 일반 axios 통신
 * @param id
 * @param pwd
 * @returns UserResponse 사용자정보
 */
export const loginUser = async (id: string, pwd: string) => {
  try {
    const response = await axiosInstance.post<UserResponse>("user/login", {
      id,
      pwd,
    });
    if (response?.data?.userInfo) {
      localStorage.setItem('accessToken', response.data.jwtToken.accessToken);
      localStorage.setItem('refleshToken', response.data.jwtToken.refleshToken);
      return { data: response.data, error: null };
    } else {
      return { data: response.data, error: "사용자 정보가 없습니다." };
    }
  } catch (error) {
    return { data: null, error: "로그인 실패" };
  }
};

