import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';
import { Calendar, User, ArrowLeft, Trash2, Edit } from 'lucide-react';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setPost(response.data.data || response.data);
      } catch (error) {
        console.error('Failed to fetch post:', error);
        alert('게시글을 불러올 수 없습니다.');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        await api.delete(`/posts/${id}`);
        alert('삭제되었습니다.');
        navigate('/');
      } catch (error) {
        console.error('Failed to delete post:', error);
        alert('삭제 중 오류가 발생했습니다.');
      }
    }
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '3rem' }}>게시글을 불러오는 중입니다...</div>;
  if (!post) return null;

  return (
    <div className="animate-slide-up">
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" className="btn btn-ghost" style={{ paddingLeft: 0 }}>
          <ArrowLeft size={18} /> 목록으로 돌아가기
        </Link>
      </div>

      <div className="card" style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>{post.title}</h1>
        
        <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={16} /> {post.author}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {new Date(post.createdAt || Date.now()).toLocaleDateString()}</span>
        </div>

        <div style={{ minHeight: '150px', whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>
          {post.content}
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <Link to={`/edit/${post.id}`} className="btn btn-primary">
            <Edit size={16} /> 수정
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            <Trash2 size={16} /> 삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
