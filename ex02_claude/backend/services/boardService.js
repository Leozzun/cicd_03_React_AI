const db = require('../db');

exports.getAll = async (search) => {
  if (search) {
    const [rows] = await db.query(
      'SELECT * FROM board WHERE title LIKE ? OR content LIKE ? ORDER BY created_at DESC',
      [`%${search}%`, `%${search}%`]
    );
    return rows;
  }
  const [rows] = await db.query('SELECT * FROM board ORDER BY created_at DESC');
  return rows;
};

exports.getOne = async (id) => {
  const [rows] = await db.query('SELECT * FROM board WHERE id = ?', [id]);
  return rows[0] || null;
};

exports.create = async ({ title, content, author }) => {
  const [result] = await db.query(
    'INSERT INTO board (title, content, author) VALUES (?, ?, ?)',
    [title, content, author]
  );
  return { id: result.insertId, title, content, author };
};

exports.update = async (id, { title, content, author }) => {
  await db.query(
    'UPDATE board SET title = ?, content = ?, author = ? WHERE id = ?',
    [title, content, author, id]
  );
  return { id, title, content, author };
};

exports.remove = async (id) => {
  await db.query('DELETE FROM board WHERE id = ?', [id]);
};
