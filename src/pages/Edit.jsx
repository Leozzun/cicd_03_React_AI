import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import PostForm from '../components/PostForm';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setInitialData(response.data.data || response.data);
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

  if (loading) return <div style={{ textAlign: 'center', padding: '3rem' }}>게시글 데이터를 불러오는 중입니다...</div>;
  if (!initialData) return null;

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>글 수정하기</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>게시글의 내용을 수정합니다.</p>
      </div>
      <PostForm isEdit={true} initialData={initialData} />
    </div>
  );
};

export default Edit;
