import { loginUser } from "../../api/user/user";
export default function () {
  async function useFetchLogin(id: string, pwd: string) {
    const { data, error } = await loginUser(id, pwd);
    return { data, error };
  }
  return { useFetchLogin };
}
