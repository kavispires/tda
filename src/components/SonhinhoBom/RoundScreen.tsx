import { Button, Popconfirm, Space, Typography } from 'antd';
import { AudioControls } from 'components/AudioControls';
import { Content } from 'components/Content';
import { Icon } from 'components/Icon';
import { Item } from 'components/Sprites';
import { useSonhinhoBom } from 'context/SonhinhoBomProvider';
import { useCardWidth } from 'hooks';
import { DreamIcon, NightmareIcon, WrongIcon } from 'icons';
import { GAMES, ASSISTED_GAMES } from 'utils/constants';

export function RoundScreen() {
  const {
    screen,
    setScreen,
    item,
    onCorrectItem,
    onIncorrectItem,
    onSkip,
    correct,
    incorrect,
    skip,
    onNewRound,
  } = useSonhinhoBom();
  const [cardWidth, ref] = useCardWidth(2, { maxWidth: 300, minWidth: 100 });

  if (screen !== 'round') return <></>;

  return (
    <Content className="px-2">
      <Space direction="vertical" className="content content--center" ref={ref}>
        <Typography.Title level={2}>Sonhinho Bom</Typography.Title>
        <Typography.Paragraph className="contained text-center">
          Aperte o play para começar a rodada.
        </Typography.Paragraph>

        <AudioControls
          game={ASSISTED_GAMES[GAMES.SONHINHO_BOM]}
          onEnded={() => setScreen('recollection')}
          autoPlay
        />

        <div className="s-item">
          <Item id={item.id} width={cardWidth} />
          <pre className="s-item__name">{item.name}</pre>
        </div>

        <div className="s-controls">
          <button className="s-controls__button s-controls__button--incorrect" onClick={onIncorrectItem}>
            <Icon icon={<NightmareIcon />} size={cardWidth / 4} />
            <span className="s-controls__count">{incorrect.length}</span>
            Incorreto
          </button>

          <button className="s-controls__button s-controls__button--correct" onClick={onCorrectItem}>
            <Icon icon={<DreamIcon />} size={cardWidth / 4} />
            <span className="s-controls__count">{correct.length}</span>
            Correto
          </button>

          <button className="s-controls__button s-controls__button--skip" onClick={onSkip}>
            <Icon icon={<WrongIcon />} size={cardWidth / 6} />
            <span className="s-controls__count">{skip.length}</span>
            Pular
          </button>
        </div>

        <Space className="center my-2">
          <Popconfirm
            title="Tem certeza que deseja pular essa fase?"
            onConfirm={() => setScreen('recollection')}
          >
            <Button size="large" danger>
              Pular
            </Button>
          </Popconfirm>
          <Popconfirm title="Tem certeza que deseja reiniciar?" onConfirm={onNewRound}>
            <Button size="large" danger>
              Recomeçar
            </Button>
          </Popconfirm>
        </Space>
      </Space>
    </Content>
  );
}
