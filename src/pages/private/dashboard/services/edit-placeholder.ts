import apiClient from '../../../../services/axios-client';
import { Post } from '../interfaces/placeholder-data';
import EditTypes from '../types/edit';

export function EDIT_PLACEHOLDER(data: EditTypes, id: number) {
  return apiClient.put<EditTypes>(`posts/${id}`, data);
}
