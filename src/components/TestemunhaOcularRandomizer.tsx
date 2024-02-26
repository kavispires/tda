import { useState } from 'react';
import { Content } from './Content';
import { random } from 'lodash';
import clsx from 'clsx';
import { Button, Space, Typography } from 'antd';

const suspects = new Array(12).fill(0).map((_, i) => i + 1);

export function TestemunhaOcularRandomizer() {
  const [value, setValue] = useState(0);

  const onRandomize = () => {
    setValue(random(1, 12));
  };

  return (
    <Content centered>
      <Space direction="vertical" className="content content--center">
        <Typography.Title level={2}>Testemunha Ocular</Typography.Title>
        <Button type="primary" size="large" onClick={onRandomize}>
          Sorteie um suspeito
        </Button>
        <div className="suspects">
          {suspects.map((suspect) => (
            <div key={suspect} className={clsx('suspect', value === suspect && 'suspect--target')}>
              {suspect}
            </div>
          ))}
        </div>
      </Space>
    </Content>
  );
}
