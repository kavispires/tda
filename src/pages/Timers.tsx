import { Content } from 'components/Content';
import { TimerSelection } from 'components/TimersSelection';
import { Outlet, useParams } from 'react-router-dom';

export function Timers() {
  const { timerId } = useParams();
  const isCondensed = !!timerId;

  return (
    <Content centered={!isCondensed}>
      <TimerSelection />
      <Outlet />
    </Content>
  );
}
