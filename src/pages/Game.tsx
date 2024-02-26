import { Alert, Image, Space } from 'antd';
import { AudioControls } from 'components/AudioControls';
import { Content } from 'components/Content';
import { SonhinhoBomGame } from 'components/SonhinhoBom/SonhinhoBomGame';
import { TestemunhaOcularRandomizer } from 'components/TestemunhaOcularRandomizer';
import { useParams } from 'react-router-dom';
import { GAMES, ASSISTED_GAMES } from 'utils/constants';

export function Game() {
  const { gameId } = useParams();

  const game = ASSISTED_GAMES[gameId ?? ''];

  if (!game) {
    return <Alert message="Jogo não encontrado" type="error" showIcon />;
  }

  if (game.id === GAMES.SONHINHO_BOM) {
    return <SonhinhoBomGame />;
  }

  if (game.id === GAMES.TESTEMUNHA_OCULAR) {
    return <TestemunhaOcularRandomizer />;
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
