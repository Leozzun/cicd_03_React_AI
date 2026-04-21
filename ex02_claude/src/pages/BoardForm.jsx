import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBoard, getBoard, updateBoard } from '../api/board';

export default function BoardForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    if (id) {
      getBoard(id).then(({ data }) =>
        setForm({ title: data.title, content: data.content, author: data.author })
      );
    }
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateBoard(id, form);
    } else {
      await createBoard(form);
    }
    navigate('/');
  };

  return (
    <main className="page">
      <button className="back-btn" onClick={() => navigate('/')}>
        ‹ 목록으로
      </button>

      <div className="page-heading">
        <h1 className="page-title">{id ? '글 수정' : '새 글 작성'}</h1>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">제목</label>
            <input
              className="form-input"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="제목을 입력하세요"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">작성자</label>
            <input
              className="form-input"
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="이름을 입력하세요"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">내용</label>
            <textarea
              className="form-textarea"
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="내용을 입력하세요"
              required
            />
          </div>

          <div className="form-footer">
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
              취소
            </button>
            <button type="submit" className="btn btn-primary">
              {id ? '수정 완료' : '등록하기'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
