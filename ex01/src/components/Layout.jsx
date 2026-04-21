import { Outlet, Link } from 'react-router-dom';
import { PenSquare } from 'lucide-react';

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="title">Vibe Board</Link>
          <Link to="/create" className="btn btn-primary">
            <PenSquare size={18} />
            새 글 쓰기
          </Link>
        </div>
      </nav>
      <main className="container animate-slide-up" style={{ padding: '2.5rem 1.5rem', flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
