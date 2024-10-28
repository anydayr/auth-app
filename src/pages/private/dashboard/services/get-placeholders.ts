import apiClient from '../../../../services/axios-client';
import { Post } from '../interfaces/placeholder-data';

export function GET_LIST_PLACEHOLDERS() {
  return apiClient.get<Post[]>('posts');
}

export function GET_PLACEHOLDERS_BY_ID(id: number) {
  return apiClient.get<Post[]>(`posts/${id}`);
}
