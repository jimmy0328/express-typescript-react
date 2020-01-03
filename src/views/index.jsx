import React from 'react';
import Layout from './layouts/main';

function HelloMessage(props) {
  return <Layout title={props.title}>
    <div>Hello, {props.name}</div>
  </Layout>
}

export default HelloMessage;