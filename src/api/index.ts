import axios, { AxiosResponse } from 'axios';
import { IResponsePostList, TAG } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://silco.verte.kr/',
});

export const createPost = (title: string, contents: string, tag: string) => {
  return instance.post('/posts', {
    title,
    contents,
    tag,
  });
};

export const getPostList = (): Promise<AxiosResponse<IResponsePostList>> => {
  return instance.get('/posts');
};

export const getPostById = (id: string | undefined) => {
  return instance.get(`/posts/${id}`);
};

export const updatePostById = (id: string, title: string, contents: string, tag: TAG) => {
  return instance.put(`posts/${id}`, { title, contents, tag });
};

export const deletePostById = (id: string | undefined) => {
  return instance.delete(`/posts/${id}`);
};
