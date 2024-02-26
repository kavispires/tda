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
  QUEM_NAO_MATA: 'quem-nao-mata',
  RETRATO_FALADO: 'retrato-falado',
  // DETETIVES_IMAGINATIVOS: 'detetives-imaginativos',
  TESTEMUNHA_OCULAR: 'testemunha-ocular',
};

export const ASSISTED_GAMES: Record<string, Game> = {
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
    rules: [
      'Cada jogador recebe um papel e um lápis, e um grupo de cartas-letras (de A-J) com o seu avatar.',
      'As cartas-expressões tem 3 níveis (1-2-3) e em cada uma das 3 rodadas todos jogadores devem seguir o mesmo nível.',
      'No início de cada rodada, cada jogador recebe uma carta e não deve olhar para ela. Quando o cronômetro é iniciado, todos têm 10 segundos para ler e desenhar a expressão no nível correspondente com a rodada.',
      'Após o tempo acabar, pegam-se as cartas-expressões de cada jogador, adicione 2 cartas a mais (num máximo total de 10), embaralha-se-as, e coloque na mesa embaixo de cada uma das plaquinhas de A-J. Coloque os desenhos aleatoriamente na mesa.',
      'Agora, cada jogador deve usar suas cartas-letras para fazer a associação expressão e desenho, incluindo seu próprio desenho.',
      'De um a um, revela-se os votos e cada jogador que escolheu corretamente ganha 2 pontos, e o desenhista recebe 1 ponto para cada jogador que acertou.',
      'Ao final de 3 rodadas o jogo termina, quem tiver mais pontos é o vencedor.',
    ],
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
  [GAMES.QUEM_NAO_MATA]: {
    id: GAMES.QUEM_NAO_MATA,
    title: 'Quem Não Mata',
    banner: `${PUBLIC_URL.IMAGES}/quem-nao-mata-pt.jpg`,
    timer: {
      audio: 'quem-nao-mata.mp3',
      lead: 0,
      cutoff: 0,
      icon: TimerIcon,
      type: 'dashboard',
    },
    rules: [
      'Prepare os baralhos para cada jogador com uma carta de cada avatar, por exemplo, um jogador recebe todas as cartas com a letra A.',
      'Em cada rodada do jogo, os jogadores devem votar em quem eliminar, tudo é válido.',
      'Quando todos os jogadores tiverem selecionado os votos secretamente, revelam-se ao mesmo tempo.',
      'Verifica-se qual o jogador foi o mais votado.',
      'Se o jogador mais votado não usou sua carta X, ele é eliminado.',
      'Porém, se ele tiver usado a carta X, quem votou para ele é eliminado.',
      'Quem não votou para o mais votado, é eliminado',
      'Quem usou sua carta X e não for o mais votado, é eliminado.',
      'Quando apenas 2 jogadores estiverem sobrando, eles vão para um duelo em que têm que escolher entre 2 cartas: Pegar tudo, Dividir irmãmente, ou Garantir 1.',
      'Refira-se a carta tabela para saber em que cada combinação de carta-duelo se resolve.',
    ],
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
    rules: [
      'Cada rodada um jogador é o Sonhador e os demais serão personagens que tentarão ajudar (ou não) o sonhador a descobrir as palavras do sonho.',
      'Escolha o primeiro Sonhador e distribua as cartas-personagens entre os demais jogadores. Cada jogador olha para seu papel secretamente. Se você é uma fada, você deve ajudar o Sonhador a acertar o maior número de palavras. Se você é um bicho-papão, você deve fazer o Sonhador errar as palavras. Se você é um Senhor dos Sonhos, seu objetivo é fazer com que o número de acertos e erros sejam iguais.',
      'Inicie o cronômetro e durante os dois minutos, cada jogador deve dizer uma dica de palavra única que ajude (ou não) o Sonhador a adivinhar a palavra. O sonhador pode tentar adivinhar a qualquer momento, mas tem apenas uma chance. Assim que ele disser algo, selecione se ele acertou ou não (em segredo) e o próximo item irá aparecer. E continue até o tempo acabar.',
      'Ao acabar o tempo, o sonhador continua com a venda e deve tentar contar o seu sonho. Se o sonhador disse TODOS os itens corretos, ele ganha 2 pontos extras.',
      'A pontuação é a seguinte: Fadas e Sonhador ganham pontos de acordo com os acertos. O Bicho-papão ganha pontos de acordo com os erros.',
      'Os senhores do sonhos ganham pontos dependendo do resultado: Se as pilhas forem iguais, eles ganham o valor da pilha mais 2 pontos. Se a diferença foi de 1, ele ganha o valor da pilha maior, se for de mais de um, ele ganha o valor da pilha menor.',
      'O jogador a esquerda do sonhador é o novo sonhar e o jogo continua até que todos tenham sido o sonhador.',
    ],
  },
  [GAMES.TESTEMUNHA_OCULAR]: {
    id: GAMES.TESTEMUNHA_OCULAR,
    title: 'Testemunha Ocular',
    banner: `${PUBLIC_URL.IMAGES}/testemunha-ocular-pt.jpg`,
    rules: [
      'Faça uma grade de 3x4 suspeitos. Um jogador será a testemunha e embaralha as cartas respostas e escolhe uma que ,indica o culpado (ou use o app para sortear)',
      'Modo Perguntas:',
      'Cada rodada um jogador recebe uma carta e lê a pergunta em voz alta e a testemunha deve responder sim ou não de acordo com o que ela acha se o culpado tem ou não a ver com a pergunta.',
      'Então, os jogadores devem eliminar um dos suspeitos que NÃO seja o culpado. O objetivo é que a última carta na mesa,seja o suspeito.',
      'Se a carta selecionada pelos jogadores não é o culpado, eles podem eliminar mais ou ir para a próxima pergunta. A cada pergunta, pelo menos um suspeito deve ser liberado.',
      'Modo Similaridade:',
      'Ao invés de usar perguntas, a testemunha tem uma mão de 5 cartas suspeitos extras. E deve selecionar uma como dica para os outros jogadores.',
      'Se a carta tem a ver, coloque-a no lado sim, se não, coloque-a no lado não.',
      'A cada rodada os jogadores devem obrigatoriamente eliminar 1, 2, 3, 4 e 1 suspeitos.',
    ],
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
