# Build stage
FROM node:20-alpine as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# 빌드 시점에 API 주소를 상대 경로(/api)로 설정하기 위해 환경변수 주입 가능
ENV VITE_API_BASE_URL=/api
RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage

# 빌드 결과물을 Nginx의 기본 정적 파일 경로로 복사
COPY --from=build-stage /app/dist /usr/share/nginx/html
# 사용자 정의 Nginx 설정 적용
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
