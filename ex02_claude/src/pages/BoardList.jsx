import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBoards, deleteBoard } from '../api/board';

export default function BoardList() {
  const [boards, setBoards] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchBoards = async () => {
    const { data } = await getBoards(search);
    setBoards(data);
  };

  useEffect(() => { fetchBoards(); }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (!confirm('이 글을 삭제하시겠습니까?')) return;
    await deleteBoard(id);
    fetchBoards();
  };

  return (
    <main className="page">
      <div className="page-heading">
        <h1 className="page-title">전체 글</h1>
        <span style={{ fontSize: 14, color: '#86868b' }}>{boards.length}개</span>
      </div>

      <div className="search-row">
        <div className="search-wrap">
          <span className="search-icon">⌕</span>
          <input
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchBoards()}
            placeholder="제목 또는 내용 검색"
          />
        </div>
        <button className="btn btn-secondary" onClick={fetchBoards}>검색</button>
      </div>

      <div className="board-card">
        {boards.length === 0 ? (
          <div className="empty-state">
            <div style={{ fontSize: 36, marginBottom: 12 }}>📭</div>
            <div>아직 작성된 글이 없습니다</div>
          </div>
        ) : (
          boards.map((b) => (
            <div className="board-item" key={b.id}>
              <span className="board-num">{b.id}</span>
              <div className="board-title-wrap" onClick={() => navigate(`/boards/${b.id}`)}>
                <div className="board-title">{b.title}</div>
                <div className="board-meta">{b.author}</div>
              </div>
              <span className="board-date">{new Date(b.created_at).toLocaleDateString('ko-KR')}</span>
              <div className="board-actions">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={(e) => { e.stopPropagation(); navigate(`/edit/${b.id}`); }}
                >
                  수정
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={(e) => handleDelete(e, b.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
