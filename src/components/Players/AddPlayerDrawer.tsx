import { Button, Drawer, Flex, Input } from 'antd';
import { Avatar } from 'components/Sprites';
import { TransparentButton } from 'components/TransparentButton';
import { usePlayersContext } from 'context/PlayersProvider';
import { useCardWidth } from 'hooks';

type AddPlayerDrawerProps = {
  open: boolean;
  onClose: () => void;
  type: 'add' | 'edit';
  name: string;
  setName: (name: string) => void;
  avatarId: string | null;
  setAvatarId: (avatarId: string | null) => void;
  handleAddPlayer: (playerId?: string) => void;
  playerId?: string;
};

export function AddPlayerDrawer({
  open,
  onClose,
  type,
  name,
  setName,
  avatarId,
  setAvatarId,
  handleAddPlayer,
  playerId,
}: AddPlayerDrawerProps) {
  const { avatars } = usePlayersContext();
  const [size] = useCardWidth(6, { minWidth: 56, maxWidth: 128 });

  return (
    <Drawer
      title={type === 'add' ? 'Adicionar Jogador' : 'Editar Jogador'}
      placement="bottom"
      closable={false}
      onClose={onClose}
      open={open}
    >
      <Input placeholder="Nome do Jogador" onChange={(e) => setName(e.target.value)} value={name} />
      <Flex gap={0} wrap="wrap" className="my-4" justify="center">
        {Object.values(avatars).map((avatar) => (
          <TransparentButton
            key={avatar.id}
            disabled={avatar.used}
            onClick={() => setAvatarId(avatar.id)}
            active={avatar.id === avatarId}
            className="avatar-selection-button"
            activeClass="avatar-selection-button--active"
          >
            <Avatar id={avatar.id} size={size} shape="square" />
          </TransparentButton>
        ))}
      </Flex>

      <Button
        block
        onClick={() => handleAddPlayer(playerId)}
        type="primary"
        disabled={!name || avatarId === null}
      >
        {type === 'add' ? 'Adicionar' : 'Editar'}
      </Button>
    </Drawer>
  );
}
