import PostList from '../components/PostList';

const Home = () => {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>최근 게시글</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>다양한 이야기를 나누어 보세요.</p>
      </div>
      <PostList />
    </div>
  );
};

export default Home;
