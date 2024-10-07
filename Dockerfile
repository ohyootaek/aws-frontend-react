# 프론트엔드 Dockerfile

# Node.js v20.17.0 이미지 사용
FROM node:20.17.0-alpine AS build

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package.json yarn.lock ./
RUN yarn install

# 소스 코드 복사 및 빌드
COPY . .
RUN yarn build

# Nginx 이미지 사용하여 정적 파일 서빙
FROM nginx:stable-alpine

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf  # nginx.conf 파일을 컨테이너에 복사

# 빌드된 파일을 Nginx의 기본 경로로 복사
COPY --from=build /app/build /usr/share/nginx/html

# SSL 인증서 복사 (필요에 따라)
COPY path/to/your/fullchain.pem /etc/ssl/certs/fullchain.pem
COPY path/to/your/privkey.pem /etc/ssl/private/privkey.pem

# Nginx 포트 설정 (HTTPS를 위해 443 포트 사용)
EXPOSE 80 443

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
