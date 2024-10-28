import { Roles } from './roles';

export interface UserInfo {
  id: number;
  user: string;
  rol: Roles | '';
  color: '';
}
