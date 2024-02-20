import { isEmpty, mapKeys, orderBy, uniqueId } from 'lodash';
import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { AVATARS } from 'utils/constants';
import { getLocalStorageKey } from 'utils/helpers';
import { AvatarEntry, Dictionary, Player } from 'utils/types';

interface PlayersContextProps {
  players: Player[];
  addPlayer: (name: string, avatarId: string) => void;
  removePlayer: (id: string) => void;
  updatePlayer: (id: string, update: { name: string; avatarId: string }) => void;
  increaseScore: (id: string, amount?: number) => void;
  decreaseScore: (id: string, amount?: number) => void;
  resetScore: (id: string) => void;
  resetScores: () => void;
  getPlayer: (id: string) => Player | undefined;
  sortBy: (sortBy: 'name' | 'score') => void;
  avatars: Dictionary<AvatarEntry>;
}

// function addToDictionary<T>(dictionary: Dictionary<T>, key: string, entry: T): Dictionary<T> {
//   return { ...dictionary, [key]: entry };
// }

// function removeFromDictionary<T>(dictionary: Dictionary<T>, key: string): Dictionary<T> {
//   const { [key]: _, ...rest } = dictionary;
//   return rest;
// }

function changeDictionaryEntry<T>(
  dictionary: Dictionary<T>,
  key: string,
  change: Dictionary<any>
): Dictionary<T> {
  return { ...dictionary, [key]: { ...dictionary[key], ...change } };
}

function changeArrayEntry<T>(array: T[], index: number, change: Partial<T>): T[] {
  const copy = [...array];
  copy[index] = { ...copy[index], ...change };
  return copy;
}

const PlayersContext = createContext<PlayersContextProps>({} as PlayersContextProps);

export const PlayersProvider = ({ children }: { children: ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [avatars, setAvatars] = useState<Dictionary<AvatarEntry>>(mapKeys(AVATARS, 'id'));

  useEffect(() => {
    // Load players from local storage or other persistent storage
    const storedPlayers: Player[] = JSON.parse(localStorage.getItem(getLocalStorageKey('players')) ?? '[]');

    if (!isEmpty(storedPlayers)) {
      setPlayers([...storedPlayers]);
    }
  }, []);

  useEffect(() => {
    if (players.length > 0) {
      // Save players to local storage or other persistent storage
      localStorage.setItem(getLocalStorageKey('players'), JSON.stringify(players));
    }
  }, [players]);

  const getPlayer = (id: string) => {
    return players.find((player) => player.id === id);
  };

  const getPlayerIndex = (id: string) => {
    return players.findIndex((player) => player.id === id);
  };

  const addPlayer = async (name: string, avatarId: string) => {
    setAvatars((prevAvatars) => changeDictionaryEntry(prevAvatars, avatarId, { used: true }));

    const newPlayer: Player = {
      id: uniqueId('player_'),
      name,
      avatarId,
      score: 0,
    };
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  const removePlayer = (id: string) => {
    const player = getPlayer(id);
    if (player) {
      setAvatars((prevAvatars) => changeDictionaryEntry(prevAvatars, player.avatarId, { used: false }));
    }
    setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== id));
  };

  const updatePlayer = (id: string, update: { name?: string; avatarId?: string }) => {
    const playerIndex = getPlayerIndex(id);
    const player = players[playerIndex];

    if (player) {
      if (update.avatarId !== undefined) {
        setAvatars((prevAvatars) => {
          // Remove
          const copy = changeDictionaryEntry(prevAvatars, players[playerIndex].avatarId, { used: false });
          // Add
          return changeDictionaryEntry(copy, update.avatarId!, { used: true });
        });
      }

      const updatedPlayer = { ...players[playerIndex], ...update };
      setPlayers((prevPlayers) => changeArrayEntry(prevPlayers, playerIndex, updatedPlayer));
    }
  };

  const increaseScore = (id: string, amount?: number) => {
    const playerIndex = getPlayerIndex(id);
    if (playerIndex !== -1) {
      setPlayers((prevPlayers) => {
        const copy = [...prevPlayers];
        copy[playerIndex].score += amount || 1;
        return copy;
      });
    }
  };

  const decreaseScore = (id: string, amount?: number) => {
    const playerIndex = getPlayerIndex(id);
    if (playerIndex !== -1) {
      setPlayers((prevPlayers) => {
        const copy = [...prevPlayers];
        copy[playerIndex].score -= amount || 1;
        return copy;
      });
    }
  };

  const resetScore = (id: string) => {
    const playerIndex = getPlayerIndex(id);
    setPlayers((prevPlayers) => changeArrayEntry(prevPlayers, playerIndex, { score: 0 }));
  };

  const resetScores = () => {
    setPlayers((prevPlayers) => {
      const copy = [...prevPlayers];
      copy.map((player) => ({ ...player, score: 0 }));
      return copy;
    });
  };

  const sortBy = (toSortBy: 'name' | 'score') => {
    setPlayers(orderBy(players, [toSortBy], [toSortBy === 'name' ? 'asc' : 'desc']));
  };

  return (
    <PlayersContext.Provider
      value={{
        players,
        addPlayer,
        removePlayer,
        updatePlayer,
        increaseScore,
        decreaseScore,
        resetScore,
        resetScores,
        sortBy,
        getPlayer,
        avatars,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersContext;

export const usePlayersContext = () => {
  const context = useContext(PlayersContext);
  if (!context) {
    throw new Error('usePlayersContext must be used within a PlayerProvider');
  }
  return context;
};
