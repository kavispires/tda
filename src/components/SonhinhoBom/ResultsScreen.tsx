import { Button, Collapse, CollapseProps, Flex, Space, Tooltip, Typography } from 'antd';
import { Content } from 'components/Content';
import { Icon } from 'components/Icon';
import { Item } from 'components/Sprites';
import { useSonhinhoBom } from 'context/SonhinhoBomProvider';
import { useCardWidth } from 'hooks';
import { BalanceIcon, DreamIcon, NightmareIcon, SleepingMaskIcon, WrongIcon } from 'icons';

const getSandmanScore = (fairyScore: number, boogeymanScore: number) => {
  if (fairyScore === boogeymanScore)
    return {
      score: fairyScore + 2,
      message: 'As duas pilhas estão iguais, então o Senhor dos Sonhos ganha 2 pontos a mais',
    };
  if (Math.abs(fairyScore - boogeymanScore) > 1)
    return {
      score: Math.min(fairyScore, boogeymanScore),
      message: 'A diferença entre as pilhas é maior que 1, então o Senhor dos Sonhos ganha a menor pilha',
    };

  return {
    score: Math.max(fairyScore, boogeymanScore),
    message: 'A diferença entre as pilhas é apenas 1, então o Senhor dos Sonhos ganha a maior pilha',
  };
};

const getDreamerScore = (fairyScore: number, recollection: Record<string, boolean>) => {
  const recollectedItems = Object.keys(recollection).filter((key) => recollection[key]);

  if (recollectedItems.length === fairyScore)
    return {
      score: fairyScore + 2,
      message: 'O Sonhador relembrou todos os itens, então ganha 2 pontos a mais',
    };

  return { score: fairyScore, message: 'O Sonhador não relembrou todos os itens' };
};

export function ResultScreen() {
  const { screen, onNewRound, correct, incorrect, recollection, skip } = useSonhinhoBom();
  const [cardWidth] = useCardWidth(5, { maxWidth: 200, minWidth: 75 });
  if (screen !== 'result') return <></>;

  const fairyScore = correct.length;
  const boogeymanScore = incorrect.length;

  const sandmanScore = getSandmanScore(fairyScore, boogeymanScore);
  const dreamerScore = getDreamerScore(fairyScore, recollection);

  const items: CollapseProps['items'] = [
    {
      key: 'fairies',
      label: (
        <div className="sonhinho-result">
          <span className="sonhinho-result__title sonhinho-result__title--fairies">
            <Icon icon={<DreamIcon />} /> Fadas
          </span>
          <span className="sonhinho-result__score sonhinho-result__title--fairies">{fairyScore}</span>
        </div>
      ),
      children: (
        <Flex
          wrap="wrap"
          gap={3}
          justify="center"
          className="sonhinho-result__list sonhinho-result__title--fairies"
        >
          {correct.map((item) => (
            <Item id={item.id} key={item.id} width={cardWidth} />
          ))}
        </Flex>
      ),
    },
    {
      key: 'boogeymen',
      label: (
        <div className="sonhinho-result">
          <span className="sonhinho-result__title sonhinho-result__title--boogeymen">
            <Icon icon={<NightmareIcon />} /> Bichos-papão
          </span>
          <span className="sonhinho-result__score  sonhinho-result__title--boogeymen">{boogeymanScore}</span>
        </div>
      ),
      children: (
        <Flex
          wrap="wrap"
          gap={3}
          justify="center"
          className="sonhinho-result__list sonhinho-result__title--boogeymen"
        >
          {incorrect.map((item) => (
            <Item id={item.id} key={item.id} width={cardWidth} />
          ))}
        </Flex>
      ),
    },
    {
      key: 'sandmen',
      label: (
        <div className="sonhinho-result">
          <span className="sonhinho-result__title sonhinho-result__title--sandmen">
            <Icon icon={<BalanceIcon />} /> Senhores dos Sonhos
          </span>
          <Tooltip title={sandmanScore.message}>
            <span className="sonhinho-result__score  sonhinho-result__title--sandmen">
              {sandmanScore.score}
            </span>
          </Tooltip>
        </div>
      ),
      children: (
        <Flex
          wrap="wrap"
          gap={3}
          justify="center"
          className="sonhinho-result__list sonhinho-result__title--sandmen"
        >
          {fairyScore === boogeymanScore && (
            <Typography.Paragraph>As duas pilhas ficaram balanceadas 2 pontos bônus</Typography.Paragraph>
          )}
          {Math.abs(fairyScore - boogeymanScore) > 1 && (
            <Typography.Paragraph>
              A diferença entre as pilhas é maior que 1, então o Senhor dos Sonhos ganha a menor pilha
            </Typography.Paragraph>
          )}
          {Math.abs(fairyScore - boogeymanScore) === 1 && (
            <Typography.Paragraph>
              A diferença entre as pilhas é apenas 1, então o Senhor dos Sonhos ganha a maior pilha
            </Typography.Paragraph>
          )}
        </Flex>
      ),
    },
    {
      key: 'dreamer',
      label: (
        <div className="sonhinho-result">
          <span className="sonhinho-result__title sonhinho-result__title--dreamer">
            <Icon icon={<SleepingMaskIcon />} /> Sonhador
          </span>
          <Tooltip title={dreamerScore.message}>
            <span className="sonhinho-result__score  sonhinho-result__title--dreamer">
              {dreamerScore.score}
            </span>
          </Tooltip>
        </div>
      ),
      children: (
        <Flex
          wrap="wrap"
          gap={3}
          justify="center"
          className="sonhinho-result__list sonhinho-result__title--dreamer"
        >
          {Object.keys(recollection).map((key) => (
            <Item id={key} key={key} width={cardWidth} />
          ))}
        </Flex>
      ),
    },
    {
      key: 'skips',
      label: (
        <div className="sonhinho-result">
          <span className="sonhinho-result__title sonhinho-result__title--skips">
            <Icon icon={<WrongIcon />} /> Quem fez esses itens pularem devem perder 1 ponto
          </span>
        </div>
      ),
      children: (
        <Flex
          wrap="wrap"
          gap={3}
          justify="center"
          className="sonhinho-result__list sonhinho-result__title--skips"
        >
          <span className="sonhinho-result__skips  sonhinho-result__title--skips">
            {skip.map((item) => (
              <Item id={item.id} key={item.id} width={cardWidth} />
            ))}
          </span>
        </Flex>
      ),
    },
  ];

  return (
    <Content centered>
      <Space direction="vertical" className="content content--center">
        <Typography.Title level={2}>Resultado</Typography.Title>

        <Collapse items={items} className="sonhinho-results" ghost />

        <Space className="center m-6">
          <Button type="primary" size="large" onClick={onNewRound}>
            End
          </Button>
        </Space>
      </Space>
    </Content>
  );
}
