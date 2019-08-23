import { Table } from 'antd';
import React from 'react';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Alpha3Code', dataIndex: 'alpha3Code', key: 'alpha3Code' },
  { title: 'Capital', dataIndex: 'capital', key: 'capital' },
  { title: 'Population', key: 'population', dataIndex: 'population' },
];

export const ListTable = props => <Table columns={columns} dataSource={props.data} loading={props.loading} />;
