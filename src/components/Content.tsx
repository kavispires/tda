import { Layout } from 'antd';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

type ContentProps = {
  centered?: boolean;
  children?: ReactNode;
};

export function Content({ centered, children }: ContentProps) {
  return (
    <Layout.Content className={clsx('app__content', centered && 'app__content--centered')}>
      {children}
    </Layout.Content>
  );
}
