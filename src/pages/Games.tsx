import { Content } from 'components/Content';
import { TimerSelection } from 'components/TimersSelection';
import { Outlet, useParams } from 'react-router-dom';

export function Games() {
  const { gameId } = useParams();
  const isCondensed = !!gameId;

  return (
    <Content centered={!isCondensed}>
      <TimerSelection />
      <Outlet />
    </Content>
  );
}
