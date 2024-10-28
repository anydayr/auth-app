import apiClient from '../../../../services/axios-client';
import CreateTypes from '../types/create';

export function CREATE_PLACEHOLDER(data: CreateTypes) {
  return apiClient.post<CreateTypes>('posts', data);
}
