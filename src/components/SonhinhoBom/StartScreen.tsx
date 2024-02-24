import { Button, Image, Space, Spin } from 'antd';
import { Content } from 'components/Content';
import { useSonhinhoBom } from 'context/SonhinhoBomProvider';

export function StartScreen() {
  const { game, screen, setScreen, isLoading } = useSonhinhoBom();

  if (isLoading) {
    return (
      <Content centered>
        <Spin />
      </Content>
    );
  }

  if (screen !== 'start') return <></>;

  return (
    <Content centered>
      <Space direction="vertical" className="content content--center">
        <div className="timer-image">
          <Image preview={false} src={game?.banner} className="timer-image__image" />
        </div>

        <Space className="center">
          <Button type="primary" size="large" onClick={() => setScreen('round')}>
            Começar
          </Button>
        </Space>
      </Space>
    </Content>
  );
}
