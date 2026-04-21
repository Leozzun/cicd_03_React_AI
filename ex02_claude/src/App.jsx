import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';
import BoardForm from './pages/BoardForm';

function Topbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="topbar">
      <span className="topbar-title" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        게시판
      </span>
      {isHome && (
        <button className="btn btn-primary btn-sm" onClick={() => navigate('/write')}>
          + 글쓰기
        </button>
      )}
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Topbar />
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/boards/:id" element={<BoardDetail />} />
        <Route path="/write" element={<BoardForm />} />
        <Route path="/edit/:id" element={<BoardForm />} />
      </Routes>
    </BrowserRouter>
  );
}
