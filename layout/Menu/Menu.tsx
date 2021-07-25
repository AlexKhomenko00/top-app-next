import React, { useContext } from "react";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

import { AppContext } from "../../context/app.context";

import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import { firstLevelMenu } from "../../helpers/helpers";

import s from "./Menu.module.css";

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const toggleSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) m.isOpen = !m.isOpen;
          return m;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => {
          return (
            <div className="" key={m.route}>
              <Link href={`/${m.route}`}>
                <a>
                  <div
                    className={cn(s.firstLevel, {
                      [s.firstLevelActive]: m.id === firstCategory,
                    })}
                  >
                    {m.icon}
                    <span>{m.name}</span>
                  </div>
                </a>
              </Link>

              {m.id === firstCategory && buildSecodLevel(m)}
            </div>
          );
        })}
      </>
    );
  };

  const buildSecodLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={s.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpen = true;
          }
          return (
            <div className="" key={m._id.secondCategory}>
              <div
                className={s.secondLevel}
                onClick={() => toggleSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(s.secondLevelBlock, {
                  [s.secondLevelBlockOpened]: m.isOpen,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link href={`/${route}/${p.alias}`} key={p._id}>
        <a
          className={cn(s.thirdLevel, {
            [s.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
          })}
        >
          {p.category}
        </a>
      </Link>
    ));
  };

  return <div className={s.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
