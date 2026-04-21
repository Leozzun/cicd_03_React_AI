import axios from 'axios';

const api = axios.create({ baseURL: '/boards' });

export const getBoards = (search) => api.get('/', { params: { search } });
export const getBoard = (id) => api.get(`/${id}`);
export const createBoard = (data) => api.post('/', data);
export const updateBoard = (id, data) => api.put(`/${id}`, data);
export const deleteBoard = (id) => api.delete(`/${id}`);
