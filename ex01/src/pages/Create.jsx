import PostForm from '../components/PostForm';

const Create = () => {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>새 글 쓰기</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>새로운 이야기를 등록해보세요.</p>
      </div>
      <PostForm isEdit={false} />
    </div>
  );
};

export default Create;
