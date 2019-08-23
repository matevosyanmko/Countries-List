import { Alert } from 'antd';
import React from 'react';

const style = { width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' };

export const Error = props => (
  <div style={style}>
    <Alert message="Error" description={props.info} type="error" />
  </div>
);
