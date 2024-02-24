import { PreloadItems } from 'components/SonhinhoBom/PreloadItems';
import { shuffle } from 'lodash';
import { createContext, ReactNode, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PUBLIC_URL, TIMERS_GAMES } from 'utils/constants';
import { Dictionary, Game, ItemCard } from 'utils/types';

import { useQuery } from '@tanstack/react-query';

interface SonhinhoBomContextProps {
  game: Game;
  screen: string;
  setScreen: (screen: string) => void;
  itemIndex: number;
  isLoading: boolean;
  item: ItemCard;
  onNewRound: () => void;
  onCorrectItem: () => void;
  correct: ItemCard[];
  onIncorrectItem: () => void;
  incorrect: ItemCard[];
  onSkip: () => void;
  skip: ItemCard[];
  recollection: Dictionary<boolean>;
  onRecollect: (itemId: string) => void;
}

const SonhinhoBomContext = createContext({} as SonhinhoBomContextProps);

export const SonhinhoBomProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const gameId = pathname.split('/').pop();

  const game = TIMERS_GAMES[gameId ?? ''];

  // Screen to be displayed
  const [screen, setScreen] = useState('start');

  const { data = [], isLoading } = useQuery<ItemCard[]>({
    queryKey: ['items'],
    queryFn: async () => {
      const response = await fetch(`${PUBLIC_URL.DATA}/items.json`);
      const data = await response.json();
      return shuffle(data);
    },
    enabled: gameId === 'sonhinho-bom',
  });

  const [itemIndex, setItemIndex] = useState(0);
  const [correct, setCorrect] = useState<ItemCard[]>([]);
  const [incorrect, setIncorrect] = useState<ItemCard[]>([]);
  const [skip, setSkip] = useState<ItemCard[]>([]);
  const [recollection, setRecollection] = useState<Dictionary<boolean>>({});

  const sample = data.slice(itemIndex, itemIndex + 5);

  const item = data[itemIndex];

  const onCorrectItem = () => {
    setCorrect((c) => [...c, item]);
    setItemIndex((i) => i + 1);
  };

  const onIncorrectItem = () => {
    setIncorrect((i) => [...i, item]);
    setItemIndex((i) => i + 1);
  };

  const onSkip = () => {
    setSkip((s) => [...s, item]);
    setItemIndex((i) => i + 1);
  };

  const onRecollect = (itemId: string) => {
    setRecollection((r) => ({ ...r, [itemId]: !r[itemId] }));
  };

  const onNewRound = () => {
    setItemIndex((p) => p + 1);
    setScreen('start');
    setCorrect([]);
    setIncorrect([]);
    setSkip([]);
    setRecollection({});
  };

  return (
    <SonhinhoBomContext.Provider
      value={{
        game,
        screen,
        setScreen,
        itemIndex,
        isLoading,
        item,
        onNewRound,
        onCorrectItem,
        correct,
        onIncorrectItem,
        incorrect,
        onSkip,
        skip,
        recollection,
        onRecollect,
      }}
    >
      <PreloadItems sample={sample} />
      {children}
    </SonhinhoBomContext.Provider>
  );
};

export const useSonhinhoBom = () => {
  const context = useContext(SonhinhoBomContext);
  if (!context) {
    throw new Error('useSonhinhoBom must be used within a SonhinhoBomProvider');
  }
  return context;
};
