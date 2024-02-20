import clsx from 'clsx';
// Ant Design Resources
import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd';
// Images
import avatars from 'assets/avatars.svg';

export interface AvatarProps extends AntAvatarProps {
  /**
   * The id of the player avatar
   */
  id?: string;
}

/**
 * Displays an Avatar svg image for given player
 * @param props
 * @returns
 */
export const Avatar = ({ id, size, shape, alt, className, ...rest }: AvatarProps) => {
  return (
    <AntAvatar
      className={clsx(className)}
      size={size}
      shape={shape}
      alt={alt ?? 'Avatar'}
      src={
        <svg viewBox="0 0 100 100">
          <use href={avatars + `#avatar-${id}`}></use>
        </svg>
      }
      {...rest}
    />
  );
};
