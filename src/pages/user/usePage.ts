import { loginUser } from "../../api/user/user";
import { selectRedis, saveRedis, clearAllRedis } from "../../api/common/redis";

export default function () {
  async function useFetchLogin(id: string, pwd: string) {
    const { data, error } = await loginUser(id, pwd);
    return { data, error };
  }

  async function useSaveRedis(key: string, value: object) {
    const { data, error } = await saveRedis(key, value);
    return { data, error };
  }

  async function useSelectRedis(key: string) {
    const { data, error } = await selectRedis(key);
    return { data, error };
  }

  async function useClearAllRedis() {
    const { data, error } = await clearAllRedis();
    return { data, error };
  }

  return { useFetchLogin, useSaveRedis, useSelectRedis, useClearAllRedis };
}
