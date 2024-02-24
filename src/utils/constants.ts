import { PanicIcon, TimerIcon } from 'icons';
import { AvatarEntry, Game } from './types';

/**
 * List of urls residing in the public folder
 */
export const PUBLIC_URL = {
  IMAGES: `${process.env.PUBLIC_URL}/images`,
  AUDIO: `${process.env.PUBLIC_URL}/audio`,
  DATA: `${process.env.PUBLIC_URL}/data`,
};

export const GAMES = {
  ARTE_RUIM: 'arte-ruim',
  SONHINHO_BOM: 'sonhinho-bom',
  RETRATO_FALADO: 'retrato-falado',
  DETETIVES_IMAGINATIVOS: 'detetives-imaginativos',
};

export const TIMERS_GAMES: Record<string, Game> = {
  [GAMES.ARTE_RUIM]: {
    id: GAMES.ARTE_RUIM,
    title: 'Arte Ruim Pra Dedéu',
    banner: `${PUBLIC_URL.IMAGES}/arte-ruim-pt.jpg`,
    audio: 'arte-ruim.mp3',
    timer: {
      lead: 2,
      cutoff: 10,
      icon: PanicIcon,
      type: 'dashboard',
    },
  },
  [GAMES.SONHINHO_BOM]: {
    id: GAMES.SONHINHO_BOM,
    title: 'Sonhinho Bom',
    banner: `${PUBLIC_URL.IMAGES}/sonhinho-bom-pt.jpg`,
    audio: 'sonhinho-bom.mp3',
    timer: {
      lead: 6,
      cutoff: 126,
      icon: PanicIcon,
      type: 'line',
    },
  },
  [GAMES.RETRATO_FALADO]: {
    id: GAMES.RETRATO_FALADO,
    title: 'Retrato Falado Monstruoso',
    banner: `${PUBLIC_URL.IMAGES}/retrato-falado-pt.jpg`,
    audio: 'retrato-falado.mp3',
    timer: {
      lead: 2,
      cutoff: 116,
      icon: TimerIcon,
      type: 'line',
    },
  },
  [GAMES.DETETIVES_IMAGINATIVOS]: {
    id: GAMES.DETETIVES_IMAGINATIVOS,
    title: 'Detetives Imaginativos',
    banner: `${PUBLIC_URL.IMAGES}/detetives-imaginativos-pt.jpg`,
    audio: 'detetives-imaginativos.mp3',
    timer: {
      lead: 0,
      cutoff: 0,
      icon: TimerIcon,
      type: 'dashboard',
    },
  },
};

export const SCORING_GAMES = [];

export const RULES_GAMES = [];

export const AVATARS: AvatarEntry[] = [
  {
    id: '0',
    name: 'Sabiá',
    used: false,
  },
  {
    id: '6',
    name: 'Raposa',
    used: false,
  },
  {
    id: '9',
    name: 'Lontra',
    used: false,
  },
  {
    id: '11',
    name: 'Abelha',
    used: false,
  },
  {
    id: '21',
    name: 'Salamandra',
    used: false,
  },
  {
    id: '25',
    name: 'Quiuí',
    used: false,
  },
  {
    id: '32',
    name: 'Peixe',
    used: false,
  },
  {
    id: '35',
    name: 'Borboleta',
    used: false,
  },
  {
    id: '41',
    name: 'Ornitorrinco',
    used: false,
  },
  {
    id: '43',
    name: 'Axolote',
    used: false,
  },
  {
    id: 'A',
    name: 'Robô',
    used: false,
  },
  {
    id: 'T',
    name: 'Alienígena',
    used: false,
  },
];
