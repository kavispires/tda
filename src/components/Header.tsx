import { Layout } from 'antd';
import { Icon } from './Icon';
import { TDIcon } from 'icons';

export function Header() {
  return (
    <Layout.Header className="app__header">
      <Icon icon={<TDIcon />} /> Tarde Divertida Assistente
    </Layout.Header>
  );
}
