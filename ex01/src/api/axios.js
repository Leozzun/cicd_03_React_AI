import axios from 'axios';

// EC2에 배포된 백엔드 API의 주소를 설정합니다.
// 로컬 개발 환경에서는 localhost 또는 프록시를 사용할 수 있습니다.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api', // 향후 실제 EC2 주소로 변경 필요
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 (필요 시 토큰 추가 등)
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 (공통 에러 처리 등)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
