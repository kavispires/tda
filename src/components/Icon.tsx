import { ReactNode } from 'react';
// Ant Design Resources
import { Avatar, AvatarProps } from 'antd';

export interface IconProps extends AvatarProps {
  /**
   * The TD icon component
   */
  icon?: ReactNode;
}

/**
 * Avatar wrapper to icons
 */
export function Icon({ icon, shape, ...rest }: IconProps) {
  return <Avatar src={icon} shape={shape ?? 'square'} {...rest} />;
}
