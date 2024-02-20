import { DeleteFilled, EditFilled, MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import { Button, Flex, Popconfirm, Space, Table, TableColumnsType } from 'antd';
import { Content } from 'components/Content';
import { AddPlayerDrawer } from 'components/Players/AddPlayerDrawer';
import { Avatar } from 'components/Sprites';
import { usePlayersContext } from 'context/PlayersProvider';
import { useCallback, useMemo, useState } from 'react';
import { Player } from 'utils/types';

export function Scorer() {
  const {
    players,
    addPlayer,
    removePlayer,
    getPlayer,
    updatePlayer,
    increaseScore,
    decreaseScore,
    resetScores,
    sortBy,
  } = usePlayersContext();

  // Drawer state
  const [drawerMode, setDrawerMode] = useState<'add' | 'edit'>('add');
  const [drawerState, setDrawerState] = useState(false);
  const [playerId, setPlayerId] = useState<string | undefined>(undefined);
  const [name, setName] = useState('');
  const [avatarId, setAvatarId] = useState<string | null>(null);

  const handleAddPlayer = (playerId?: string) => {
    if (drawerMode === 'edit' && playerId) {
      updatePlayer(playerId, { name: name.trim(), avatarId: avatarId! });
    } else {
      addPlayer(name.trim(), avatarId!);
    }
    setName('');
    setAvatarId(null);
  };

  const openAddDrawer = () => {
    setDrawerMode('add');
    setDrawerState(true);
    setName('');
    setAvatarId(null);
  };

  const openEditDrawer = useCallback(
    (playerId: string) => {
      setPlayerId(playerId);
      const player = getPlayer(playerId);
      console.log(player);
      setDrawerMode('edit');
      setDrawerState(true);
      setName(player?.name || '');
      setAvatarId(player?.avatarId || null);
    },
    [getPlayer]
  );

  const columns: TableColumnsType<Player> = useMemo(
    () => [
      {
        title: 'Avatar',
        dataIndex: 'avatarId',
        key: 'avatarId',
        render: (avatarId) => <Avatar id={avatarId} />,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
      },
      {
        title: 'Actions',
        dataIndex: 'id',
        key: 'id',
        render: (id) => (
          <Space size="large" wrap>
            <Button.Group size="large">
              <Button icon={<PlusCircleFilled />} onClick={() => increaseScore(id)} />
              <Button icon={<MinusCircleFilled />} onClick={() => decreaseScore(id)} />
            </Button.Group>

            <Button.Group>
              <Button icon={<EditFilled />} onClick={() => openEditDrawer(id)} />

              <Popconfirm title="Tem certeza que quer deletar?" onConfirm={() => removePlayer(id)}>
                <Button type="primary" danger icon={<DeleteFilled />} />
              </Popconfirm>
            </Button.Group>
          </Space>
        ),
      },
    ],
    [decreaseScore, increaseScore, openEditDrawer, removePlayer]
  );

  return (
    <Content padded>
      <Table
        columns={columns}
        dataSource={players}
        pagination={{ pageSize: 20 }}
        //  scroll={{ y: 500 }}
      />

      <Flex gap={6} className="my-2">
        <Button block onClick={openAddDrawer}>
          Adicionar jogador
        </Button>
        <Popconfirm title="Tem certeza que quer zerar a pontuação?" onConfirm={() => {}}>
          <Button block onClick={() => resetScores()}>
            Resetar pontuação
          </Button>
        </Popconfirm>
        <Button block onClick={() => sortBy('score')}>
          Rank
        </Button>
      </Flex>

      <AddPlayerDrawer
        open={drawerState}
        onClose={() => setDrawerState(false)}
        type={drawerMode}
        name={name}
        setName={setName}
        avatarId={avatarId}
        setAvatarId={setAvatarId}
        handleAddPlayer={handleAddPlayer}
        playerId={playerId}
      />
    </Content>
  );
}
