import React, { useState } from "react";
import { useForm } from "react-hook-form";
import usePage from "./usePage";
import "./../../styles/login.css";
function Login() {
  const { useFetchLogin } = usePage();

  const DEFAULT_ITEM = { 
    id: 'admin',
    pwd: 'admin',
  };
  const { register: user, handleSubmit: userSubmit } = useForm({
    defaultValues: DEFAULT_ITEM
  });

  const fetchLogin = useFetchLogin;
  const [digest, setDigest] = useState("");

  const onSubmit = async (data) => {
    const { data: userData, error } = await fetchLogin(data.id, data.pwd);
    if (userData.userInfo) {
      setDigest(userData.userInfo.pwd);
    } else {
      alert(error);
    }
  };

  return (
    <div className="login">
    <h4>로그인 관련 기능 구현</h4>
    <form onSubmit={userSubmit(onSubmit)} className="login-form">
      <input {...user("id")} type="text" placeholder="아이디" className="login-input" />
      <br />
      <input {...user("pwd")} type="password" placeholder="비밀번호" className="login-input" />
      <button type="submit" className="login-button">로그인</button>
    </form>
    <div className="login-info">
      <p><strong>SHA-256(단방향):</strong> {digest}</p>
      <p><strong>JWT:</strong> </p>
      <p><strong>Redis:</strong> </p>
    </div>
  </div>
  );
}

export default Login;
