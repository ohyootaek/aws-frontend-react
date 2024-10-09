# Nginx 이미지 사용하여 정적 파일 서빙
FROM nginx:stable-alpine

# 빌드된 파일을 Nginx의 기본 경로로 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx 포트 설정 (기본 80)
EXPOSE 80 443

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]