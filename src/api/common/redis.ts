import axiosInstance from "../../api/axiosInstance";

export const selectRedis = async (key: string) => {
  try {
    const response = await axiosInstance.get<object>(`/redis/${key}`);
    return {data: response.data, error: null};
  } catch (error) {
    return { data: null, error: "Redis data is null" };
  }
};

export const saveRedis = async (key: string, value: object) => {
  try {
    await axiosInstance.put(`/redis/save`, { key, value });
  } catch (error) {
    return { data: false, error: "Failed to save data to Redis" }; // 오류 반환
  }
  alert('저장되었습니다.');
  return { data: true, error: null }; // 성공적으로 저장된 경우
};

export const clearAllRedis = async () => {
  try {
    await axiosInstance.delete(`/redis/clear`);
  } catch (error) {
    return { data: false, error: "Failed to clear data from Redis" }; // 오류 반환
  }
  alert('초기화되었습니다.');
  return { data: true, error: null }; // 성공적으로 저장된 경우
};
