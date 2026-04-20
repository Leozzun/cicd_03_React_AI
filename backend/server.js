const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// 전체 검색
app.get('/api/posts', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM posts ORDER BY id DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 글 번호 검색
app.get('/api/posts/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM posts WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Post not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 등록
app.post('/api/posts', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const [result] = await db.query(
      'INSERT INTO posts (title, content, author) VALUES (?, ?, ?)',
      [title, content, author]
    );
    res.status(201).json({ id: result.insertId, title, content, author });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 수정
app.put('/api/posts/:id', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    await db.query(
      'UPDATE posts SET title = ?, content = ?, author = ? WHERE id = ?',
      [title, content, author, req.params.id]
    );
    res.json({ message: 'Post updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 삭제
app.delete('/api/posts/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM posts WHERE id = ?', [req.params.id]);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
