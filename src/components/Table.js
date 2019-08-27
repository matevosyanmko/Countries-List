import { Table } from 'antd';
import React from 'react';

const style = { margin: "10px 0", background: "#388E3C", color: "#000", border: "1px solid #388E3C", borderRadius: "2px" }

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Alpha3Code', dataIndex: 'alpha3Code', key: 'alpha3Code' },
  { title: 'Capital', dataIndex: 'capital', key: 'capital' },
  { title: 'Population', key: 'population', dataIndex: 'population' },
];


export const ListTable = props => <Table columns={columns} dataSource={props.data} loading={!props.loading} bodyStyle={style} />;
