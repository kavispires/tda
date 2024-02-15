import { PanicIcon, TimerIcon } from 'icons';
import { Game } from './types';

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
  SONHINHO_BOM: 'soninho-bom',
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
