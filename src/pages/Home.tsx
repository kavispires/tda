import { Image } from 'antd';
import { Content } from 'components/Content';
import { PUBLIC_URL } from 'utils/constants';

export function Home() {
  return (
    <Content centered>
      <Image preview={false} src={`${PUBLIC_URL.IMAGES}/tarde-divertida-logo.svg`} className="home-banner" />
    </Content>
  );
}
