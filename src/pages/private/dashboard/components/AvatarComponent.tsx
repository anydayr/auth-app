import React from 'react';
import Avatar from '@mui/material/Avatar';

interface InitialAvatarProps {
  name: string;
  color: string;
}

const AvatarComponent: React.FC<InitialAvatarProps> = ({ name, color }) => {
  const initial = name.charAt(0).toUpperCase();

  return <Avatar sx={{ width: 40, height: 40, backgroundColor: color }}>{initial}</Avatar>;
};
export default AvatarComponent;
