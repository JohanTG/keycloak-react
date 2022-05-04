import React from 'react';
import { Layout as AntdLayout } from 'antd';
import styles from './Layout.module.scss';
import { Outlet } from "react-router-dom";
import {HelmetProvider, Helmet} from "react-helmet-async";

const { Header, Content } = AntdLayout;

function Layout() {
  return (
    <AntdLayout style={{minHeight:"100vh"}}>
      <HelmetProvider>
        <Helmet>
          <title>Rick and Morty - All characters</title>
          <meta name="description" content="All characters of 'Rick and Morty' TV series" />
          <link rel="icon" href="/favicon.ico" />
        </Helmet>
      </HelmetProvider>
      <Header>
      </Header>
      <Content className={styles.content} >
        <Outlet />
      </Content>
    </AntdLayout>
  );
}

export default Layout;
