/**
 * Get items and shuffle
 * Keep track of used items (maybe just index?)
 * Get 15 items per round (pre-load them)
 */

import { Button, Space, Spin } from 'antd';
import { shuffle } from 'lodash';
import { useState } from 'react';
import { GAMES, PUBLIC_URL, TIMERS_GAMES } from 'utils/constants';

import { useQuery } from '@tanstack/react-query';

import { Item } from './Sprites';
import { TransparentButton } from './TransparentButton';
import { DreamIcon } from 'icons';
import { ItemCard } from 'utils/types';
import { Icon } from './Icon';
import { AudioControls } from './AudioControls';

export function DreamControls() {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState<ItemCard[]>([]);
  const [incorrect, setIncorrect] = useState<ItemCard[]>([]);
  const [skip, setSkip] = useState<ItemCard[]>([]);

  const { data = [] } = useQuery<ItemCard[]>({
    queryKey: ['items'],
    queryFn: async () => {
      const response = await fetch(`${PUBLIC_URL.DATA}/items.json`);
      const data = await response.json();
      return shuffle(data);
    },
  });

  const sample = data.slice(index, index + 5);

  const item = data[index];

  const handleCorrect = () => {
    setCorrect([...correct, item]);
    setIndex((i) => i + 1);
  };

  const handleIncorrect = () => {
    setIncorrect([...incorrect, item]);
    setIndex((i) => i + 1);
  };

  const handleSkip = () => {
    setSkip([...skip, item]);
    setIndex((i) => i + 1);
  };

  if (!item) {
    return <Spin />;
  }

  return (
    <Space direction="vertical">
      <Space style={{ width: 1, height: 1, overflow: 'hidden' }}>
        {sample.map((item) => (
          <Item key={item.id} id={item.id} width={1} />
        ))}
      </Space>

      <AudioControls game={TIMERS_GAMES[GAMES.SONHINHO_BOM]} />
      <Space direction="vertical">
        <Item id={item.id} width={100} />
        <pre>{item.name}</pre>
      </Space>

      <Button.Group>
        <Button
          icon={<Icon icon={<DreamIcon />} />}
          onClick={handleIncorrect}
          size="large"
          block
          shape="round"
        >
          Errado ({incorrect.length})
        </Button>
        <Button icon={<Icon icon={<DreamIcon />} />} onClick={handleSkip} size="large" block shape="round">
          Pular ({skip.length})
        </Button>
        <Button icon={<Icon icon={<DreamIcon />} />} onClick={handleCorrect} size="large" block shape="round">
          Certo ({correct.length})
        </Button>
      </Button.Group>

      <Button>Acordar</Button>
    </Space>
  );
}
