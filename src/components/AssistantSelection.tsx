import { Image, Space } from 'antd';
import { TransparentButton } from './TransparentButton';
import { ASSISTED_GAMES } from 'utils/constants';
import { useNavigate, useParams } from 'react-router-dom';
import clsx from 'clsx';

const timers = Object.values(ASSISTED_GAMES);

export function AssistantSelection() {
  const { timerId } = useParams();
  const isCondensed = !!timerId;
  const navigate = useNavigate();

  const goToTimer = (timerId: string) => navigate(`/games/${timerId}`);

  return (
    <Space
      size={isCondensed ? 'small' : 'large'}
      className={clsx('button-selectors-container', isCondensed && 'button-selectors-container--condensed')}
      wrap={!isCondensed}
    >
      {timers.map((game) => (
        <TransparentButton
          key={game.id}
          className={clsx('game-image-button', isCondensed && 'game-image-button--condensed')}
          onClick={() => goToTimer(game.id)}
        >
          <Image preview={false} src={game.banner} className="game-image-button__image" />
        </TransparentButton>
      ))}
    </Space>
  );
}
