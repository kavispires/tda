import { Alert, Image, Space } from 'antd';
import { AudioControls } from 'components/AudioControls';
import { Content } from 'components/Content';
import { SonhinhoBomGame } from 'components/SonhinhoBom/SonhinhoBomGame';
import { useParams } from 'react-router-dom';
import { GAMES, TIMERS_GAMES } from 'utils/constants';

export function Game() {
  const { gameId } = useParams();

  const game = TIMERS_GAMES[gameId ?? ''];

  if (!game) {
    return <Alert message="Jogo não encontrado" type="error" showIcon />;
  }

  if (game.id === GAMES.SONHINHO_BOM) {
    return <SonhinhoBomGame />;
  }

  return (
    <Content centered>
      <Space direction="vertical" className="content content--center">
        <div className="timer-image">
          <Image preview={false} src={game?.banner} className="timer-image__image" />
        </div>

        <AudioControls game={game} key={game.id} />
      </Space>
    </Content>
  );
}
