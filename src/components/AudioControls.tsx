import { Progress, Space } from 'antd';
import { useAudio } from 'react-use';
import { PUBLIC_URL } from 'utils/constants';
import { Game } from 'utils/types';
import { TransparentButton } from './TransparentButton';
import { Icon } from './Icon';
import { PanicIcon, PauseIcon, PlayIcon, RestartIcon } from 'icons';
import { useEffect } from 'react';

type AudioControlsProps = {
  game: Game;
};

export function AudioControls({ game }: AudioControlsProps) {
  const [audio, state, controls] = useAudio({
    src: `${PUBLIC_URL.AUDIO}/${game.audio}`,
    autoPlay: false,
  });

  const onRestart = () => {
    controls.pause();
    controls.seek(0);
    controls.play();
  };

  const onPlay = () => {
    controls.play();
  };

  const onPause = () => {
    controls.pause();
  };

  useEffect(() => {
    controls.volume(1);
  }, []);

  const percentage = Math.round((state.time / game.timerCutoff) * 100);
  console.log(state.time, percentage);

  return (
    <Space direction="vertical">
      {audio}
      <Progress
        percent={percentage}
        type="circle"
        format={(percent) =>
          (percent ?? 0) < 100 ? `${percent}%` : <Icon icon={<PanicIcon />} size="large" />
        }
      />
      <Space size="large">
        <TransparentButton onClick={onRestart} hoverType="none">
          <Icon icon={<RestartIcon />} size="large" />
        </TransparentButton>
        <TransparentButton onClick={state.playing ? onPause : onPlay} hoverType="none">
          <Icon icon={state.playing ? <PauseIcon /> : <PlayIcon />} size="large" />
        </TransparentButton>
      </Space>
    </Space>
  );
}
