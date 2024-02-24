import { Button, Flex, Space, Typography } from 'antd';
import { Content } from 'components/Content';
import { Icon } from 'components/Icon';
import { Item } from 'components/Sprites';
import { TransparentButton } from 'components/TransparentButton';
import { useSonhinhoBom } from 'context/SonhinhoBomProvider';
import { useCardWidth } from 'hooks';
import { CheckIcon } from 'icons';

export function RecollectionScreen() {
  const { screen, setScreen, correct, recollection, onRecollect } = useSonhinhoBom();
  const [cardWidth, ref] = useCardWidth(2, { maxWidth: 300, minWidth: 100 });

  if (screen !== 'recollection') return <></>;

  return (
    <Content className="px-2">
      <Space direction="vertical" className="content content--center my-4" ref={ref}>
        <Typography.Title level={2}>Conte seu sonho</Typography.Title>

        <Flex className="s-recollection" wrap="wrap" gap={12} justify="center">
          {correct.map((item) => (
            <TransparentButton
              key={item.id}
              onClick={() => onRecollect(item.id)}
              className="s-recollection__item"
              style={{ width: cardWidth }}
            >
              {recollection[item.id] && (
                <Icon icon={<CheckIcon />} size={48} className="s-recollection__check" />
              )}
              <Flex gap={12} align="center">
                <Item id={item.id} width={cardWidth / 2} />

                <span className="s-recollection__name">{item.name}</span>
              </Flex>
            </TransparentButton>
          ))}
        </Flex>

        <Button block type="primary" size="large" onClick={() => setScreen('result')}>
          Pronto!
        </Button>
      </Space>
    </Content>
  );
}
