import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import usePage from "../../pages/user/usePage";
import "../../styles/login.css";

function Login() {
  const { useFetchLogin, useSelectRedis, useSaveRedis, useClearAllRedis } =
    usePage();
  const fetchLogin = useFetchLogin;
  const selectRedis = useSelectRedis;
  const saveRedis = useSaveRedis;
  const clearAllRedis = useClearAllRedis;

  const DEFAULT_ITEM = {
    id: "admin",
    pwd: "admin",
  };
  const { register: user, handleSubmit: userSubmit } = useForm({
    defaultValues: DEFAULT_ITEM,
  });

  const [digest, setDigest] = useState("");
  const [jwtToken, setJwtToken] = useState({});
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    const { data: userData, error } = await fetchLogin(data.id, data.pwd);
    if (userData.userInfo) {
      setDigest(userData.userInfo.pwd);
      setJwtToken(userData.jwtToken);
    } else {
      alert(error);
    }
  };

  const onSaveRedis = async () => {
    if (!key) return alert("key 입력은 필수입니다.");
    if (!value) return alert("value 입력은 필수입니다.");
    const { data, error } = await saveRedis(key, value);
    setData(data);
    setError(error);
  };

  const onSelectRedis = async () => {
    if (!key) return alert("key 입력은 필수입니다.");
    const { data, error } = await selectRedis(key);
    setData(data);
    setError(error);
  };

  const onClearAllRedis = async () => {
    const { data, error } = await clearAllRedis();
    setData(data);
    setError(error);
  };

  return (
    <div className="login">
      <h4>로그인 관련 기능 구현</h4>
      <form onSubmit={userSubmit(onSubmit)} className="login-form">
        <input
          {...user("id")}
          type="text"
          placeholder="아이디"
          className="login-input"
        />
        <br />
        <input
          {...user("pwd")}
          type="password"
          placeholder="비밀번호"
          className="login-input"
        />
        <button type="submit" className="login-button">
          로그인
        </button>
      </form>
      <div className="login-info">
        <p>
          <strong>SHA-256(단방향):</strong> {digest}
        </p>
        <p>
          <strong>JWT AccessToken:</strong> {jwtToken.accessToken}
        </p>
        <p>
          <strong>JWT RefleshToken:</strong> {jwtToken.refleshToken}
        </p>
        <p>
          <strong>Redis:</strong>{" "}
        </p>
        <p> 
          <input
            type="text"
            placeholder="키 입력"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="값 입력"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </p>
        <p>
          <button onClick={onSaveRedis}>저장</button>
          <button onClick={onSelectRedis}>조회</button>
          <button onClick={onClearAllRedis}>전체삭제</button>
        </p>
        <p>value: {data}</p>
        <p>error: {error}</p>
      </div>
    </div>
  );
}

export default Login;
