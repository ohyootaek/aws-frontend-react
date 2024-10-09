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

# npx serve를 사용하여 정적 파일 제공
CMD ["npx", "serve", "-s", ".", "-l", "3000"]

# 포트 노출
EXPOSE 3000