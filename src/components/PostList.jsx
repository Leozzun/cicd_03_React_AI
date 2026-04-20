import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import { ChevronRight, Calendar, User } from 'lucide-react';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        // EC2 응답 형식에 맞춰 배열 설정 (일반적인 REST 응답 처리)
        const data = Array.isArray(response.data) ? response.data : (response.data.content || response.data.data || []);
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>목록을 불러오는 중입니다...</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>등록된 게시글이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="card">
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id} className="list-item">
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.5rem' }}>{post.title}</h3>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><User size={14} /> {post.author}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={14} /> {new Date(post.createdAt || Date.now()).toLocaleDateString()}</span>
            </div>
          </div>
          <ChevronRight color="var(--border-color)" />
        </Link>
      ))}
    </div>
  );
};

export default PostList;
