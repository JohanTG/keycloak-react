import React from 'react';
import { Layout as AntdLayout } from 'antd';
import styles from './Layout.module.scss';
import { Outlet } from "react-router-dom";
import {Helmet} from "react-helmet";

const { Header, Content } = AntdLayout;

function Layout() {
  return (
    <AntdLayout style={{minHeight:"100vh"}}>
      <Helmet>
        <title>Rick and Morty: List</title>
        <meta name="description" content="All characters of 'Rick and Morty' TV series" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Header>
      </Header>
      <Content className={styles.content} >
        <Outlet />
      </Content>
    </AntdLayout>
  );
}

export default Layout;
