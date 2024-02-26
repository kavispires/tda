import { Collapse, CollapseProps, Space, Typography } from 'antd';
import { Content } from 'components/Content';
import { RolesTable } from 'components/SonhinhoBom/RolesTable';
import { GAMES, ASSISTED_GAMES } from 'utils/constants';
import { Game } from 'utils/types';

const RenderRules = ({ game }: { game: Game }) => (
  <>
    {(game.rules ?? []).map((rule, index) => (
      <Typography.Paragraph key={index}>{rule}</Typography.Paragraph>
    ))}
  </>
);

export function Rules() {
  const items: CollapseProps['items'] = [
    {
      key: GAMES.ARTE_RUIM,
      label: ASSISTED_GAMES[GAMES.ARTE_RUIM].title,
      children: <RenderRules game={ASSISTED_GAMES[GAMES.ARTE_RUIM]} />,
    },
    {
      key: GAMES.QUEM_NAO_MATA,
      label: ASSISTED_GAMES[GAMES.QUEM_NAO_MATA].title,
      children: <RenderRules game={ASSISTED_GAMES[GAMES.QUEM_NAO_MATA]} />,
    },
    {
      key: GAMES.SONHINHO_BOM,
      label: ASSISTED_GAMES[GAMES.SONHINHO_BOM].title,
      children: (
        <>
          <RenderRules game={ASSISTED_GAMES[GAMES.SONHINHO_BOM]} />
          <RolesTable />
        </>
      ),
    },
    // {
    //   key: GAMES.RETRATO_FALADO,
    //   label: ASSISTED_GAMES[GAMES.RETRATO_FALADO].title,
    //   children: <p>{text}</p>,
    // },
    {
      key: GAMES.TESTEMUNHA_OCULAR,
      label: ASSISTED_GAMES[GAMES.TESTEMUNHA_OCULAR].title,
      children: <RenderRules game={ASSISTED_GAMES[GAMES.TESTEMUNHA_OCULAR]} />,
    },
  ];

  return (
    <Content centered>
      <Space direction="vertical" className="content content--center">
        <div style={{ width: '98vw' }}>
          <Collapse items={items} style={{ width: '100%' }} accordion expandIconPosition="end" />
        </div>
      </Space>
    </Content>
  );
}
