import clsx from 'clsx';
import { TimerSelection } from 'components/TimersSelection';
import { Outlet, useParams } from 'react-router-dom';

export function Timers() {
  const { timerId } = useParams();
  const isCondensed = !!timerId;

  return (
    <div className={clsx(isCondensed ? 'content' : 'content--center')}>
      <TimerSelection />
      <Outlet />
    </div>
  );
}
