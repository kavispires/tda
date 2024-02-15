import { Progress, Space } from 'antd';
import { PanicIcon, PauseIcon, PlayIcon, RestartIcon } from 'icons';
import { useEffect } from 'react';
import { useAudio, useVibrate } from 'react-use';
import { PUBLIC_URL } from 'utils/constants';
import { Game } from 'utils/types';

import { Icon, IconProps } from './Icon';
import { TransparentButton } from './TransparentButton';

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const lead = game.timer?.lead ?? 0;
  const cutoff = (game.timer?.cutoff ?? state.duration) - lead;
  const percentage = state.time < lead ? 0 : Math.round(((state.time - lead) / cutoff) * 100);

  const EndIcon = game.timer?.icon ?? PanicIcon;

  return (
    <Space direction="vertical">
      {audio}
      <Progress
        percent={percentage}
        type={game.timer?.type ?? 'circle'}
        format={(percent) =>
          (percent ?? 0) < 100 ? `${percent}%` : <EndIconVibrate size="large" icon={<EndIcon />} />
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

function EndIconVibrate({ icon }: IconProps) {
  useVibrate(true, [300, 100, 200, 100, 1000, 300], false);

  return <Icon icon={icon} />;
}
