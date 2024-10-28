import apiClient from '../../../../services/axios-client';
import { Post } from '../interfaces/placeholder-data';

export function DELETE_APPOINTMENT_BY_ID(id: number | string) {
  return apiClient.delete<Post>(`post/${id}`);
}
