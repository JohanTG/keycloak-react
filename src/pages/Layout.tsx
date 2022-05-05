import React from 'react';
import { Layout as AntdLayout } from 'antd';
import styles from './Layout.module.scss';
import { Outlet } from "react-router-dom";

const { Header, Content } = AntdLayout;

function Layout() {
  return (
    <AntdLayout style={{minHeight:"100vh"}}>
      <Header>
      </Header>
      <Content className={styles.content} >
        <Outlet />
      </Content>
    </AntdLayout>
  );
}

export default Layout;
