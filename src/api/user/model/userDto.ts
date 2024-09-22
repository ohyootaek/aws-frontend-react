// UserInfo 타입 정의
interface UserInfo {
    id: string;
    pwd: string;
}

export interface UserResponse {
    userInfo: UserInfo;
}
