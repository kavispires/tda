import { AssistantSelection } from 'components/AssistantSelection';
import { Content } from 'components/Content';
import { Outlet, useParams } from 'react-router-dom';

export function Games() {
  const { gameId } = useParams();
  const isCondensed = !!gameId;

  return (
    <Content centered={!isCondensed}>
      <AssistantSelection />
      <Outlet />
    </Content>
  );
}
