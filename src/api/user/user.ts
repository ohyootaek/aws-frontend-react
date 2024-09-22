import axiosInstance from "../axiosInstance";
import { UserResponse } from "./model/userDto";

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
      return { data: response.data, error: null };
    } else {
      return { data: response.data, error: "사용자 정보가 없습니다." };
    }
  } catch (error) {
    return { data: null, error: "로그인 실패" };
  }
};

/*
export const loginUserReactQuery = async (id: string, pwd: string) => {
  const { data, error, isLoading, refetch } = useQuery(
    [id, pwd],
    () =>
      axiosInstance.post("user/login", {
        id,
        pwd,
      }),
    { enabled: true }
  );
};
*/
