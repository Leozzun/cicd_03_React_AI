# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

게시판 CRUD 시스템. React(Vite) 프론트엔드 + Express 백엔드 + MySQL(EC2) 구성.

## Dev Commands

**Frontend** (루트 디렉토리):
```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

**Backend** (`backend/` 디렉토리):
```bash
cd backend
npm install
npm run dev      # nodemon, http://localhost:4000
npm start        # node app.js
```

## Architecture

프론트와 백엔드는 별도로 실행되며, Vite dev server의 proxy를 통해 통신한다. `/boards` 경로 요청은 모두 `http://localhost:4000`으로 프록시된다 (`vite.config.js`).

**Request flow:**
```
Browser → Vite proxy (/boards/*) → Express (port 4000) → MySQL (EC2)
```

**Backend layer structure:**
- `routes/` — Express 라우터, HTTP 메서드와 경로 정의만
- `controllers/` — req/res 처리, 에러 핸들링
- `services/` — 비즈니스 로직 + SQL 쿼리 (mysql2/promise pool 사용)
- `db/index.js` — connection pool 싱글톤, `.env`에서 설정 읽음

**Frontend structure:**
- `src/api/board.js` — axios 인스턴스, baseURL `/boards`
- `src/pages/` — 라우트별 페이지 컴포넌트 (List, Detail, Form)
- `src/index.css` — 전체 스타일 (Apple 디자인 시스템, class 기반)

## Environment Setup

`backend/.env` 파일 필요 (`.env.example` 참고):
```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=4000
```

## Database

MySQL 테이블 생성 SQL:
```sql
CREATE TABLE board (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  author VARCHAR(100),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /boards?search= | 목록 조회 (검색 지원) |
| GET | /boards/:id | 단건 조회 |
| POST | /boards | 등록 |
| PUT | /boards/:id | 수정 |
| DELETE | /boards/:id | 삭제 |
