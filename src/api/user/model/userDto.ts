// UserInfo 타입 정의
interface UserInfo {
  id: string;
  pwd: string;
}

interface JwtToken {
  accessToken: string;
  refleshToken: string;
}

export interface UserResponse {
  userInfo: UserInfo;
  jwtToken: JwtToken;
}
