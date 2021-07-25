import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

import s from "./Layout.module.css";
import React from "react";
import { AppContextProvider, IAppContext } from "../context/app.context";

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header} />
      <Sidebar className={s.sidebar} />
      <div className={s.body}>{children}</div>
      <Footer className={s.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: React.FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};

export default Layout;
