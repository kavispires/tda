import { Alert, Image, Space } from 'antd';
import { AudioControls } from 'components/AudioControls';
import { useParams } from 'react-router-dom';
import { TIMERS_GAMES } from 'utils/constants';

export function Timer() {
  const { timerId } = useParams();

  const game = TIMERS_GAMES.find((game) => game.id === timerId);

  if (!game) {
    return <Alert message="Jogo não encontrado" type="error" showIcon />;
  }

  return (
    <Space direction="vertical" className="content content--center">
      <div className="timer-image">
        <Image preview={false} src={game?.banner} className="timer-image__image" />
      </div>

      <AudioControls game={game} />
    </Space>
  );
}
