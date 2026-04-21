import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBoard, deleteBoard } from '../api/board';

export default function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    getBoard(id).then(({ data }) => setBoard(data));
  }, [id]);

  const handleDelete = async () => {
    if (!confirm('이 글을 삭제하시겠습니까?')) return;
    await deleteBoard(id);
    navigate('/');
  };

  if (!board) return <div className="loading">불러오는 중...</div>;

  return (
    <main className="page">
      <button className="back-btn" onClick={() => navigate('/')}>
        ‹ 목록으로
      </button>

      <div className="detail-card">
        <div className="detail-header">
          <h1 className="detail-title">{board.title}</h1>
          <div className="detail-meta">
            <span>✍️ {board.author}</span>
            <span>🗓 {new Date(board.created_at).toLocaleDateString('ko-KR', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}</span>
          </div>
        </div>

        <div className="detail-body">{board.content}</div>

        <div className="detail-footer">
          <button className="btn btn-secondary" onClick={() => navigate('/')}>목록</button>
          <button className="btn btn-secondary" onClick={() => navigate(`/edit/${id}`)}>수정</button>
          <button className="btn btn-danger" onClick={handleDelete}>삭제</button>
        </div>
      </div>
    </main>
  );
}
