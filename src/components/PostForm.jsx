import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const PostForm = ({ isEdit = false, initialData = null }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        author: initialData.author || '',
        content: initialData.content || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.content) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      if (isEdit) {
        await api.put(`/posts/${initialData.id}`, formData);
        alert('수정되었습니다.');
        navigate(`/post/${initialData.id}`);
      } else {
        await api.post('/posts', formData);
        alert('등록되었습니다.');
        navigate('/');
      }
    } catch (error) {
      console.error('Failed to submit post:', error);
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card animate-slide-up" style={{ padding: '2.5rem' }}>
      <div className="form-group">
        <label className="form-label" htmlFor="title">제목</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          className="form-input" 
          value={formData.title} 
          onChange={handleChange} 
          placeholder="게시글 제목을 입력하세요"
        />
      </div>
      
      <div className="form-group">
        <label className="form-label" htmlFor="author">작성자</label>
        <input 
          type="text" 
          id="author" 
          name="author" 
          className="form-input" 
          value={formData.author} 
          onChange={handleChange} 
          placeholder="작성자 이름을 입력하세요"
          readOnly={isEdit} 
          style={isEdit ? { backgroundColor: 'var(--bg-color)', color: 'var(--text-muted)' } : {}}
        />
      </div>
      
      <div className="form-group">
        <label className="form-label" htmlFor="content">내용</label>
        <textarea 
          id="content" 
          name="content" 
          className="form-textarea" 
          value={formData.content} 
          onChange={handleChange} 
          placeholder="게시글 내용을 입력하세요"
        ></textarea>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
        <button type="button" onClick={() => navigate(-1)} className="btn btn-ghost">취소</button>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? '처리 중...' : (isEdit ? '수정하기' : '등록하기')}
        </button>
      </div>
    </form>
  );
};

export default PostForm;
