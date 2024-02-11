/**
 * List of urls residing in the public folder
 */
export const PUBLIC_URL = {
  IMAGES: `${process.env.PUBLIC_URL}/images`,
  AUDIO: `${process.env.PUBLIC_URL}/audio`,
};

export const GAMES = {
  ARTE_RUIM: 'arte-ruim',
  SONHINHO_BOM: 'soninho-bom',
  RETRATO_FALADO: 'retrato-falado',
  DETETIVES_IMAGINATIVOS: 'detetives-imaginativos',
};

export const TIMERS_GAMES = [
  {
    id: GAMES.ARTE_RUIM,
    title: 'Arte Ruim Pra Dedéu',
    banner: `${PUBLIC_URL.IMAGES}/arte-ruim-pt.jpg`,
    audio: 'arte-ruim.mp3',
    timerCutoff: 10,
  },
  {
    id: GAMES.SONHINHO_BOM,
    title: 'Sonhinho Bom',
    banner: `${PUBLIC_URL.IMAGES}/sonhinho-bom-pt.jpg`,
    audio: 'sonhinho-bom.mp3',
    timerCutoff: 10,
  },
  {
    id: GAMES.RETRATO_FALADO,
    title: 'Retrato Falado Monstruoso',
    banner: `${PUBLIC_URL.IMAGES}/retrato-falado-pt.jpg`,
    audio: 'retrato-falado.mp3',
    timerCutoff: 10,
  },
  {
    id: GAMES.DETETIVES_IMAGINATIVOS,
    title: 'Detetives Imaginativos',
    banner: `${PUBLIC_URL.IMAGES}/detetives-imaginativos-pt.jpg`,
    audio: 'detetives-imaginativos.mp3',
    timerCutoff: 10,
  },
];

export const SCORING_GAMES = [];

export const RULES_GAMES = [];