import axios from 'axios';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:8080',
});

// todo (6) api 작성

export const getPostList = () => {
  return instance.get(`/posts`);
};

export const createPost = () => {
  return null;
};

export const getPostById = (id: number) => {
  return instance.get(`/post/${id}`);
};

export const updatePostById = () => {
  return null;
};

export const deletePostById = () => {
  return null;
};
