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
  // DETETIVES_IMAGINATIVOS: 'detetives-imaginativos',
  QUEM_NAO_MATA: 'quem-nao-mata',
  TESTEMUNHA_OCULAR: 'testemunha-ocular',
};

export const TIMERS_GAMES: Record<string, Game> = {
  [GAMES.ARTE_RUIM]: {
    id: GAMES.ARTE_RUIM,
    title: 'Arte Ruim Pra Dedéu',
    banner: `${PUBLIC_URL.IMAGES}/arte-ruim-pt.jpg`,
    timer: {
      audio: 'arte-ruim.mp3',
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
    timer: {
      audio: 'sonhinho-bom.mp3',
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
    timer: {
      audio: 'retrato-falado.mp3',
      lead: 2,
      cutoff: 116,
      icon: TimerIcon,
      type: 'line',
    },
  },
  // [GAMES.DETETIVES_IMAGINATIVOS]: {
  //   id: GAMES.DETETIVES_IMAGINATIVOS,
  //   title: 'Detetives Imaginativos',
  //   banner: `${PUBLIC_URL.IMAGES}/detetives-imaginativos-pt.jpg`,
  //   audio: 'detetives-imaginativos.mp3',
  //   timer: {
  //     lead: 0,
  //     cutoff: 0,
  //     icon: TimerIcon,
  //     type: 'dashboard',
  //   },
  // },
};

export const RULES_GAMES: Record<string, Omit<Game, 'audio'>> = {
  [GAMES.ARTE_RUIM]: {
    id: GAMES.ARTE_RUIM,
    title: 'Arte Ruim Pra Dedéu',
    banner: `${PUBLIC_URL.IMAGES}/arte-ruim-pt.jpg`,
    rules: [],
  },
  [GAMES.SONHINHO_BOM]: {
    id: GAMES.SONHINHO_BOM,
    title: 'Sonhinho Bom',
    banner: `${PUBLIC_URL.IMAGES}/sonhinho-bom-pt.jpg`,
    rules: [],
  },
  [GAMES.QUEM_NAO_MATA]: {
    id: GAMES.QUEM_NAO_MATA,
    title: 'Quem Não Mata',
    banner: `${PUBLIC_URL.IMAGES}/quem-nao-mata-pt.jpg`,
    rules: [],
  },
  [GAMES.TESTEMUNHA_OCULAR]: {
    id: GAMES.TESTEMUNHA_OCULAR,
    title: 'Testemunha Ocular',
    banner: `${PUBLIC_URL.IMAGES}/testemunha-ocular-pt.jpg`,
    rules: [],
  },
};

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
