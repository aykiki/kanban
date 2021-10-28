import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import './SideBar.css';
import { AddCircle, AppsRounded, Dashboard } from 'grommet-icons';
import { useHistory } from 'react-router-dom';
export const SideBar: FC = () => {
  const [openedPoint, setOpen] = useState<number>(0);
  const history = useHistory();

  interface NavItem {
    id: number;
    title: string;
    path: string;
    icon?: React.ReactNode;
    selected: boolean;
  }

  const navList = [
    {
      id: 0,
      title: 'Dashboard',
      path: '/home',
      selected: true,
    },
    {
      id: 1,
      title: 'My boards',
      path: '/boards',
      selected: false,
    },
    {
      id: 2,
      title: 'Create board',
      path: '/addboard',
      selected: false,
    },
  ];

  const [navListState, setNavList] = useState<NavItem[]>(navList);

  useLayoutEffect(() => {
    const navList = [
      {
        id: 0,
        title: 'Dashboard',
        path: '/home',
        icon: (
          <Dashboard
            size="18px"
            {...(openedPoint === 0
              ? { color: 'rgba(5,5,91,0.8)' }
              : { color: '#05055b7d' })}
          />
        ),
        selected: openedPoint === 0,
      },
      {
        id: 1,
        title: 'My boards',
        path: '/home/boards',
        icon: (
          <AppsRounded
            size="18px"
            {...(openedPoint === 1
              ? { color: 'rgba(5,5,91,0.8)' }
              : { color: '#05055b7d' })}
          />
        ),
        selected: openedPoint === 1,
      },
      {
        id: 2,
        title: 'Create board',
        path: '/home/addboard',
        icon: (
          <AddCircle
            size="18px"
            {...(openedPoint === 2
              ? { color: 'rgba(5,5,91,0.8)' }
              : { color: '#05055b7d' })}
          />
        ),
        selected: openedPoint === 2,
      },
    ];
    setNavList(navList);
  }, [openedPoint]);

  const handleChangeNav = (item: NavItem) => {
    setOpen(item.id);
    history.push(item.path);
  };

  return (
    <nav>
      <ul className="list">
        {navListState.map((item) => (
          <li
            style={
              openedPoint === item.id
                ? { color: 'rgba(5,5,91,0.8)' }
                : { color: '#05055b7d' }
            }
            onClick={() => handleChangeNav(item)}
          >
            {item.icon!}
            {item.title}
          </li>
        ))}
        <></>
      </ul>
    </nav>
  );
};
