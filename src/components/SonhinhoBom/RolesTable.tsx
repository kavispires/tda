import { Table } from 'antd';

export function RolesTable() {
  const columns = [
    {
      title: 'Number of players',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '4',
      dataIndex: '4',
      key: '4',
    },
    {
      title: '5',
      dataIndex: '5',
      key: '5',
    },
    {
      title: '6',
      dataIndex: '6',
      key: '6',
    },
    {
      title: '7',
      dataIndex: '7',
      key: '7',
    },
    {
      title: '8',
      dataIndex: '8',
      key: '8',
    },
    {
      title: '9',
      dataIndex: '9',
      key: '9',
    },
    {
      title: '10',
      dataIndex: '10',
      key: '10',
    },
  ];

  const data = [
    {
      role: 'Fadas',
      4: '1',
      5: '2',
      6: '3',
      7: '3',
      8: '4',
      9: '4',
      10: '5',
    },
    {
      role: 'Bichos-papão',
      4: '1',
      5: '1',
      6: '2',
      7: '2',
      8: '3',
      9: '3',
      10: '4',
    },
    {
      role: 'Senhores dos Sonhos',
      4: '2',
      5: '2',
      6: '1',
      7: '2',
      8: '1',
      9: '2',
      10: '1',
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} size="small" />;
}
