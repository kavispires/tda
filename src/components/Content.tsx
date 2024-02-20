import { Layout } from 'antd';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

type ContentProps = {
  centered?: boolean;
  children?: ReactNode;
  padded?: boolean;
  className?: string;
};

export function Content({ centered, children, padded, className }: ContentProps) {
  return (
    <Layout.Content
      className={clsx(
        'app__content',
        centered && 'app__content--centered',
        padded && 'app__content--padded',
        className
      )}
    >
      {children}
    </Layout.Content>
  );
}
